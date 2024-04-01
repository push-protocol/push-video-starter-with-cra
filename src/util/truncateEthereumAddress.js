export default function truncateEthereumAddress(address) {
  if (!address.startsWith('0x')) {
    throw new Error('Invalid Ethereum address format');
  }
  const prefix = address.substring(0, 4);
  const truncated = address.substring(address.length - 6);
  return `${prefix}...${truncated}`;
}
