import { BCS } from "supra-l1-sdk";
import { WalletClient } from "./WalletClient";
import { getStarkeyProvider, connectToStarkey } from "@/lib/starkey";
import { logDebug } from "@/utils/logDebug";

export class StarkeyWalletClient implements WalletClient {
  private starkeyProvider: any;

  constructor() {
    logDebug("Initializing StarkeyWalletClient");
    this.starkeyProvider = getStarkeyProvider();

    if (!this.starkeyProvider) {
      const error = new Error("Starkey wallet not available");
      logDebug("Error during initialization", { error });
      throw error;
    }

    logDebug("Starkey provider initialized", {
      starkeyProvider: this.starkeyProvider,
    });
  }

  async getAddress(): Promise<string> {
    logDebug("Getting address from Starkey wallet");
    const address = await connectToStarkey();
    if (!address) throw new Error("Failed to connect to Starkey wallet");

    logDebug("Fetched account address", { address });
    return address;
  }

  async sendTransaction(
    contractAddress: string,
    moduleName: string,
    functionName: string,
    args: any[],
    transactionType:
      | "contractInteraction"
      | "tokenTransfer" = "contractInteraction"
  ): Promise<any> {
    if (!this.starkeyProvider) {
      throw new Error("Starkey provider is not initialized");
    }

    logDebug("Preparing transaction", {
      contractAddress,
      moduleName,
      functionName,
      args,
      transactionType,
    });

    try {
      // Get current account
      const accounts = await this.starkeyProvider.account();
      if (!accounts || accounts.length === 0) {
        throw new Error("No account connected");
      }

      // Get chain ID
      const networkData = await this.starkeyProvider.getChainId();
      if (!networkData) {
        throw new Error("Could not get chain ID");
      }

      if (transactionType === "tokenTransfer") {
        const [toAddress, amount] = args;
        const tx = {
          from: accounts[0],
          to: toAddress,
          value: amount,
          chainId: networkData.chainId,
        };

        logDebug("Sending token transfer", { tx });
        const result = await this.starkeyProvider.sendTransaction(tx);
        logDebug("Token transfer result", { result });
        return result;
      } else {
        // Set expiration time for transaction
        const txExpiryTime = Math.ceil(Date.now() / 1000) + 30; // 30 seconds

        const rawTxPayload = [
          accounts[0], // from address
          0, // sequence number (handled by provider)
          contractAddress,
          moduleName,
          functionName,
          [], // type args
          args.map((arg) =>
            typeof arg === "number"
              ? BCS.bcsSerializeUint64(arg)
              : BCS.bcsSerializeStr(arg)
          ),
          { txExpiryTime },
        ];

        logDebug("Creating raw transaction", { rawTxPayload });
        const data = await this.starkeyProvider.createRawTransactionData(
          rawTxPayload
        );

        const tx = {
          data,
          from: accounts[0],
          to: contractAddress,
          chainId: networkData.chainId,
          value: "",
        };

        logDebug("Sending contract interaction", { tx });
        const result = await this.starkeyProvider.sendTransaction(tx);
        logDebug("Contract interaction result", { result });
        return result;
      }
    } catch (error) {
      logDebug("Transaction error", { error });
      throw error;
    }
  }
}
