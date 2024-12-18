import { SupraClient, SupraAccount, BCS } from "supra-l1-sdk";
import { WalletClient } from "./WalletClient";
import { logDebug } from "@/utils/logDebug";

export class SupraSDKWalletClient implements WalletClient {
  private client: SupraClient;
  private account: SupraAccount;

  constructor(client: SupraClient, account: SupraAccount) {
    logDebug("Initializing SupraSDKWalletClient", { client, account });
    this.client = client;
    this.account = account;
  }

  async getAddress(): Promise<string> {
    const address = this.account.address();
    logDebug("Fetched account address", { address });
    return address;
  }

  async invokeViewMethod(
    functionFullName: string,
    typeArgs: string[],
    args: any[]
  ): Promise<any> {
    logDebug("Invoking view method", {
      functionFullName,
      typeArgs,
      args,
    });
    const result = await this.client.invokeViewMethod(
      functionFullName,
      typeArgs,
      args
    );
    logDebug("View method result", { result });
    return result;
  }

  async sendTransaction(
    contractAddress: string,
    moduleName: string,
    functionName: string,
    args: any[]
  ): Promise<any> {
    logDebug("Preparing to send transaction", {
      contractAddress,
      moduleName,
      functionName,
      args,
    });
    const sequenceNumber = (
      await this.client.getAccountInfo(this.account.address())
    ).sequence_number;
    logDebug("Fetched sequence number", { sequenceNumber });

    const serializedArgs = args.map((arg) => {
      const serialized =
        typeof arg === "number"
          ? BCS.bcsSerializeUint64(arg)
          : BCS.bcsSerializeStr(arg);
      logDebug("Serialized argument", { arg, serialized });
      return serialized;
    });

    const tx = await this.client.createSerializedRawTxObject(
      this.account.address(),
      sequenceNumber,
      contractAddress,
      moduleName,
      functionName,
      [],
      serializedArgs
    );
    logDebug("Created raw transaction", { tx });

    const result = await this.client.sendTxUsingSerializedRawTransaction(
      this.account,
      tx,
      { enableWaitForTransaction: true }
    );
    logDebug("Transaction result", { result });
    return result;
  }
}
