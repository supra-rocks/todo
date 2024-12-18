import config from "@/config";

export const logDebug = (message: string, ...data: any[]) => {
  if (config.DEBUG_MODE) console.log(`DEBUG: ${message}`, ...data);
};
