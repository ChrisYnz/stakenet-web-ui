import { NETWORKS, OPTION_SELECT, SUPPORTED_SWAPS } from "constants/connext/supportedSwaps";

export const getSupportedSenderChains = () => {
  const chainsSender: OPTION_SELECT[] = []
  SUPPORTED_SWAPS.forEach(obj => {
    chainsSender.push({
      value: obj.depositChainId,
      name: NETWORKS.find(element => element.chainId === obj.depositChainId)?.chainName || ''
    })
  })
  return chainsSender;
}

export const getSupportedWithdrawChains = (senderChainId: number) => {
  const chainsWithDrawth: OPTION_SELECT[] = [];
  const withdrawChains = SUPPORTED_SWAPS?.find(element =>
    element.depositChainId === senderChainId
  )?.withdrawChains || []
  withdrawChains.forEach((obj) => {
    chainsWithDrawth.push({
      value: obj.withdrawChainId,
      name: NETWORKS.find(element => element.chainId === obj.withdrawChainId)?.chainName || ''
    })
  })
  return chainsWithDrawth;
}

export const getSupportedAssets = (senderChainId: number, widthDrawChain: number) => {
  const withdrawChains = SUPPORTED_SWAPS?.find(element =>
    element.depositChainId === senderChainId
  )?.withdrawChains
  return withdrawChains?.find((element) => element.withdrawChainId === widthDrawChain)?.suportedAssets
}

export const getAssetToken = (chaindId: number, asset: string) => {
  const token = NETWORKS.find(element => (
    element.chainId === chaindId
  ))?.assets[asset] || ''
  return token;
}
