/**
 * Cleans a hex string by removing the "0x" prefix, if it exists.
 */
export const cleanHexString = (hexString: string): string => {
  return hexString.startsWith("0x") ? hexString.slice(2) : hexString;
};

/**
 * Ensures a hex string has the "0x" prefix.
 */
export const ensureHexPrefix = (hexString: string): string => {
  return hexString.startsWith("0x") ? hexString : `0x${hexString}`;
};
