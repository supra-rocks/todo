import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import {
  connectToStarkey,
  disconnectFromStarkey,
  getCurrentAccount,
  getBalance,
  subscribeToAccountChanges,
  subscribeToNetworkChanges,
  subscribeToDisconnect,
  getStarkeyProvider,
} from "@/lib/starkey";
import { logDebug } from "@/utils/logDebug";

const ConnectButton: React.FC = () => {
  // Initialize states with undefined to prevent hydration mismatch
  const [account, setAccount] = useState<string | null | undefined>(undefined);
  const [balance, setBalance] = useState<string>("");
  const [chainId, setChainId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isExtensionInstalled, setIsExtensionInstalled] = useState<
    boolean | undefined
  >(false);

  const formatAccount = (acc: string) =>
    `${acc.slice(0, 4)}...${acc.slice(-4)}`;

  const checkExtensionInstalled = () => {
    const provider = getStarkeyProvider();
    if (provider) {
      setIsExtensionInstalled(true);
      initializeConnection();
    }
  };

  const updateBalance = async () => {
    if (account) {
      const balanceData = await getBalance();
      if (balanceData) {
        setBalance(
          `${balanceData.formattedBalance} ${balanceData.displayUnit}`
        );
      }
    } else {
      setBalance("");
    }
  };

  const initializeConnection = async () => {
    try {
      const connectedAccount = await getCurrentAccount();
      if (connectedAccount) {
        setAccount(connectedAccount);
        await updateBalance();
      }
    } catch (error) {
      logDebug("Error initializing connection", { error });
    }
  };

  const handleConnect = async () => {
    setLoading(true);
    try {
      const connectedAccount = await connectToStarkey();
      if (connectedAccount) {
        setAccount(connectedAccount);
        await updateBalance();
      }
    } catch (error) {
      logDebug("Error connecting to Starkey", { error });
    }
    setLoading(false);
  };

  const handleDisconnect = async () => {
    try {
      await disconnectFromStarkey();
      setAccount(null);
      setBalance("");
      setChainId("");
    } catch (error) {
      logDebug("Error disconnecting from Starkey", { error });
    }
  };

  useEffect(() => {
    checkExtensionInstalled();

    // Setup event subscriptions
    subscribeToAccountChanges((accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        updateBalance();
      } else {
        setAccount(null);
        setBalance("");
      }
    });

    subscribeToNetworkChanges((data) => {
      setChainId(data.chainId);
    });

    subscribeToDisconnect(() => {
      setAccount(null);
      setBalance("");
      setChainId("");
    });
  }, []);

  if (isExtensionInstalled === false) {
    return (
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={() => window.open("https://starkey.app/", "_blank")}
        sx={{ textTransform: "none" }}
      >
        Install StarKey
      </Button>
    );
  }

  if (loading) {
    return (
      <Box display="flex" alignItems="center" gap={1}>
        <CircularProgress size={24} />
        <Typography>Connecting...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {account ? (
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              bgcolor: "primary.main",
              minWidth: "64px",
              minHeight: "42.25px",
              padding: "8px 22px",
              borderRadius: "4px",
            }}
          >
            <Typography variant="body1" fontWeight="bold" fontSize="0.9375rem">
              {formatAccount(account)}
            </Typography>
          </Box>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={handleDisconnect}
            sx={{ textTransform: "none" }}
            disableElevation
          >
            Disconnect
          </Button>
        </Box>
      ) : (
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleConnect}
          sx={{ textTransform: "none" }}
          disableElevation
        >
          Connect StarKey
        </Button>
      )}
    </Box>
  );
};

export default ConnectButton;
