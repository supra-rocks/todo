import { useState, useEffect } from "react";
import { initializeWalletClient, WalletClient } from "@/lib/WalletClient";

const useWallet = () => {
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initWallet = async () => {
      try {
        const client = await initializeWalletClient();
        const address = await client.getAddress();
        setWalletClient(client);
        setAccountAddress(address);
      } catch (error) {
        console.error("Failed to initialize wallet:", error);
      } finally {
        setLoading(false);
      }
    };

    initWallet();
  }, []);

  return { walletClient, accountAddress, loading };
};

export default useWallet;
