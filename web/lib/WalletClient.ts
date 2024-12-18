import { SupraClient } from "supra-l1-sdk";
import { StarkeyWalletClient } from "./StarKeyWalletClient";
import { SupraSDKWalletClient } from "./SupraSDKWalletClient";
import config from "@/config";
import { logDebug } from "@/utils/logDebug";

export interface WalletClient {
  getAddress(): Promise<string>;
  invokeViewMethod?(
    functionFullName: string,
    typeArgs: string[],
    args: any[]
  ): Promise<any>;
  sendTransaction(
    contractAddress: string,
    moduleName: string,
    functionName: string,
    args: any[],
    transactionType?: "contractInteraction" | "tokenTransfer"
  ): Promise<any>;
}

export const initializeWalletClient = async (): Promise<WalletClient> => {
  logDebug("Initializing SupraClient for view methods", {
    rpc: config.SUPRA_MOVEVM_TESTNET_RPC,
  });

  const supraClient = await SupraClient.init(config.SUPRA_MOVEVM_TESTNET_RPC);

  let starkeyWallet: StarkeyWalletClient | null = null;
  try {
    starkeyWallet = new StarkeyWalletClient();
    logDebug("Starkey wallet initialized successfully");
  } catch (error) {
    logDebug(
      "Starkey wallet unavailable. Fallback to SupraSDK for transactions",
      { error }
    );
  }

  return new Proxy(
    {
      // View methods always use SupraClient
      async invokeViewMethod(functionFullName, typeArgs, args) {
        logDebug("Invoking view method", {
          functionFullName,
          typeArgs,
          args,
        });
        try {
          const result = await supraClient.invokeViewMethod(
            functionFullName,
            typeArgs,
            args
          );
          logDebug("View method result", { result });
          return result;
        } catch (error) {
          logDebug("SupraClient invokeViewMethod not available", { error });
        }
      },

      // Transactions use StarkeyWallet if available; fallback to SupraSDKWalletClient
      async sendTransaction(
        contractAddress,
        moduleName,
        functionName,
        args,
        transactionType
      ) {
        logDebug("Preparing to send transaction", {
          contractAddress,
          moduleName,
          functionName,
          args,
          transactionType,
        });

        if (starkeyWallet) {
          logDebug("Using StarkeyWallet for transaction");
          return starkeyWallet.sendTransaction(
            contractAddress,
            moduleName,
            functionName,
            args,
            transactionType
          );
        }

        logDebug("Using SupraSDKWalletClient for transaction (fallback)");
        const supraSDKWallet = new SupraSDKWalletClient(
          supraClient,
          await initializeSupraAccount()
        );

        const result = await supraSDKWallet.sendTransaction(
          contractAddress,
          moduleName,
          functionName,
          args
        );
        logDebug("Transaction result from SupraSDKWalletClient", { result });
        return result;
      },

      // Address is fetched from StarkeyWallet if available; fallback to SupraSDKWalletClient
      async getAddress() {
        if (starkeyWallet) {
          logDebug("Fetching address from StarkeyWallet");
          const address = await starkeyWallet.getAddress();
          logDebug("Fetched address from StarkeyWallet", { address });
          return address;
        }

        logDebug("Fetching address from SupraSDKWalletClient");
        const supraAccount = await initializeSupraAccount();
        if (!supraAccount) return;
        const address = supraAccount.address().toString();
        logDebug("Fetched address from SupraSDKWalletClient", { address });
        return address;
      },
    },
    {
      // Default to undefined for missing properties
      get(target, prop) {
        const value = target[prop as keyof typeof target];
        logDebug("Accessing property on WalletClient", {
          property: prop,
          value,
        });
        return value || undefined;
      },
    }
  );
};

const initializeSupraAccount = async () => {
  logDebug("Initializing SupraAccount");
  const { SupraAccount } = await import("supra-l1-sdk");
  const { cleanHexString } = await import("@/utils/cryptoUtils");
  const privateKey = cleanHexString(config.SUPRA_WALLET_PRIVATE_KEY);
  if (!privateKey) {
    logDebug("SupraAccount could not be initialized without a private key");
    return;
  }
  const account = new SupraAccount(Buffer.from(privateKey, "hex"));
  logDebug("Initialized SupraAccount", { address: account.address() });
  return account;
};
