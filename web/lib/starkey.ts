import { logDebug } from "@/utils/logDebug";

declare global {
  interface Window {
    starkey?: {
      supra: any;
    };
  }
}

export const getStarkeyProvider = () => {
  // During SSR, return null
  if (typeof window === "undefined") {
    return null;
  }

  const provider = window?.starkey?.supra || null;
  logDebug("Getting Starkey provider", { provider });
  return provider;
};

export const connectToStarkey = async (): Promise<string | null> => {
  const provider = getStarkeyProvider();

  if (!provider) {
    logDebug("Starkey provider not found");
    window.open("https://starkey.app/", "_blank");
    return null;
  }

  try {
    logDebug("Attempting to connect to Starkey");
    const response = await provider.connect();
    logDebug("Starkey connection response", { response });

    if (response && response.length > 0) {
      return response[0];
    }
    return null;
  } catch (error) {
    logDebug("Error connecting to Starkey", { error });
    return null;
  }
};

export const disconnectFromStarkey = async (): Promise<void> => {
  const provider = getStarkeyProvider();
  if (provider) {
    try {
      await provider.disconnect();
      logDebug("Disconnected from Starkey");
    } catch (error) {
      logDebug("Error disconnecting from Starkey", { error });
    }
  }
};

export const getCurrentAccount = async (): Promise<string | null> => {
  const provider = getStarkeyProvider();
  if (!provider) return null;

  try {
    const accounts = await provider.account();
    logDebug("Got current account", { accounts });
    return accounts[0] || null;
  } catch (error) {
    logDebug("Error getting current account", { error });
    return null;
  }
};

export const getBalance = async (): Promise<{
  formattedBalance: string;
  displayUnit: string;
} | null> => {
  const provider = getStarkeyProvider();
  if (!provider) return null;

  try {
    const balance = await provider.balance();
    logDebug("Got balance", { balance });
    return balance;
  } catch (error) {
    logDebug("Error getting balance", { error });
    return null;
  }
};

export const subscribeToAccountChanges = (
  callback: (accounts: string[]) => void
): void => {
  const provider = getStarkeyProvider();
  if (provider?.on) {
    provider.on("accountChanged", callback);
    logDebug("Subscribed to account changes");
  }
};

export const subscribeToNetworkChanges = (
  callback: (data: { chainId: string }) => void
): void => {
  const provider = getStarkeyProvider();
  if (provider?.on) {
    provider.on("networkChanged", callback);
    logDebug("Subscribed to network changes");
  }
};

export const subscribeToDisconnect = (callback: () => void): void => {
  const provider = getStarkeyProvider();
  if (provider?.on) {
    provider.on("disconnect", callback);
    logDebug("Subscribed to disconnect events");
  }
};
