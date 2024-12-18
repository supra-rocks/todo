import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Type declaration for better TypeScript support
type Config = {
  DEBUG_MODE: boolean;
  SUPRA_WALLET_PRIVATE_KEY: string;
  SUPRA_MOVEVM_TESTNET_RPC: string;
  SUPRA_MOVEVM_TESTNET_RPC_CHAIN_ID: number;
  SUPRA_MOVEVM_RPC: string;
  SUPRA_MOVEVM_RPC_CHAIN_ID: number;
  ADVANCED_TODO_LIST_CONTRACT_ADDRESS: string;
};

const config: Config = {
  DEBUG_MODE: Boolean(process.env.NEXT_PUBLIC_DEBUG_MODE) || true,
  SUPRA_WALLET_PRIVATE_KEY:
    process.env.NEXT_PUBLIC_SUPRA_WALLET_PRIVATE_KEY || "",
  SUPRA_MOVEVM_TESTNET_RPC:
    process.env.NEXT_PUBLIC_SUPRA_MOVEVM_TESTNET_RPC ||
    "https://rpc-testnet.supra.com",
  SUPRA_MOVEVM_TESTNET_RPC_CHAIN_ID:
    Number(process.env.NEXT_PUBLIC_SUPRA_MOVEVM_TESTNET_RPC_CHAIN_ID) || 6,
  SUPRA_MOVEVM_RPC:
    process.env.NEXT_PUBLIC_SUPRA_MOVEVM_RPC || "https://rpc-mainnet.supra.com",
  SUPRA_MOVEVM_RPC_CHAIN_ID:
    Number(process.env.NEXT_PUBLIC_SUPRA_MOVEVM_RPC_CHAIN_ID) || 8,
  ADVANCED_TODO_LIST_CONTRACT_ADDRESS:
    process.env.NEXT_PUBLIC_ADVANCED_TODO_LIST_CONTRACT_ADDRESS || "",
};

export default config;
