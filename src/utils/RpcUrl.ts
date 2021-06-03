export const getRpcUrl = (networkId: number) => {
  switch (networkId) {
    case 1:
      return 'https://mainnet.infura.io/v3/74ada23cd9fc4f17a31979f7d1d4f5ad'
    case 56:
      return 'https://bsc-dataseed1.ninicoin.io/'
    case 100:
      return 'https://xdai.poanetwork.dev/'
    case 137:
      return 'https://rpc-mainnet.maticvigil.com'
    default:
      throw new Error(`No RPC configured for network: ${networkId}`);
  }
}
