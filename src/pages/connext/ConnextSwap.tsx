import React, { useState } from 'react';
import { ConnextModal } from '@connext/vector-modal';
import { getAssetToken, getSupportedAssets, getSupportedSenderChains, getSupportedWithdrawChains } from 'utils/connext';

import { InputText, Container, FormColumn, Button, Select, ContainerModal } from './styleds';
import { getRpcUrl } from 'utils/RpcUrl';
import { CONNEXT_ROUTER } from 'constants/connext/routers';

export const ConnextSwap = () => {
  const [senderChain, setSenderChain] = useState(Number(getSupportedSenderChains()[0].value));
  const [receiverChain, setReceiverChain] = useState(Number(getSupportedWithdrawChains(senderChain)[0].value));
  const [asset, setAsset] = useState(getSupportedAssets(senderChain, receiverChain)?.[0] || '');
  const [withdrawalAddress, setWithdrawalAddress] = useState("")

  const [showModal, setShowModal] = useState(false);

  const [injectedProvider, setInjectedProvider] = useState(false);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setWithdrawalAddress(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowModal(true)
  }

  const handleSenderChain = (event: any) => {
    const newSenderChain = Number(event.target.value)
    if (receiverChain === newSenderChain || !getSupportedWithdrawChains(newSenderChain).find(element => element.value === receiverChain)) {
      const newReceiverChain = getSupportedWithdrawChains(newSenderChain)[0].value
      setReceiverChain(newReceiverChain)
      updateAsset(newSenderChain, newReceiverChain)
    } else {
      updateAsset(newSenderChain, receiverChain)
    }
    setSenderChain(newSenderChain)
  }

  const updateAsset = (senderChain: number, receiverChain: number) => {
    const supportedAssets = getSupportedAssets(senderChain, receiverChain) || []
    if (!supportedAssets?.find((element: string) => asset === element)) {
      setAsset(supportedAssets[0])
    }
  }

  const handleReceiverChain = (event: any) => {
    const newReceiverChain = Number(event.target.value)
    setReceiverChain(newReceiverChain)
    if (!getSupportedAssets(senderChain, newReceiverChain)?.find((element: string) => asset === element)) {
      setAsset(getSupportedAssets(senderChain, newReceiverChain)?.[0] || '')
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormColumn>
          <Button
            type="button"
            onClick={async () => {
              if ((window as any).ethereum) {
                const req = await (window as any).ethereum.send(
                  "eth_requestAccounts"
                );
                console.log("req: ", req);
                setInjectedProvider((window as any).ethereum);
              }
            }}
          >
            Connect Metamask
      </Button>
          <Select
            id="sender-chain"
            value={senderChain}
            onChange={handleSenderChain}
          >
            {
              getSupportedSenderChains().map(chainSender => {
                return (
                  <option value={chainSender.value} key={chainSender.value}>
                    {chainSender.name}
                  </option>
                )
              })
            }
          </Select>
          <Select
            id="receiver-chain"
            value={receiverChain}
            onChange={handleReceiverChain}
          >
            {
              getSupportedWithdrawChains(senderChain).map(receiverChain => {
                return (
                  <option value={receiverChain.value} key={receiverChain.value}>
                    {receiverChain.name}
                  </option>
                )
              })
            }
          </Select>
          <Select
            id="asset"
            onChange={(event) => setAsset(event.target.value)}
            value={asset}
          >
            {
              getSupportedAssets(senderChain, receiverChain)?.map((assetItem: string) => {
                return (
                  <option value={assetItem} key={assetItem}>
                    {assetItem}
                  </option>
                )
              })
            }
          </Select>
          <InputText
            type="text"
            placeholder="Receiver Address"
            value={withdrawalAddress}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            disabled={
              (!withdrawalAddress ||
                !senderChain ||
                !receiverChain ||
                senderChain === receiverChain)
            }
          >
            Cross-chain transfer
          </Button>
        </FormColumn>
      </form >
      <ContainerModal>
        <ConnextModal
          showModal={showModal}
          routerPublicIdentifier={CONNEXT_ROUTER}
          depositAssetId={getAssetToken(senderChain, asset)}
          depositChainId={senderChain}
          withdrawAssetId={getAssetToken(receiverChain, asset)}
          withdrawChainId={receiverChain}
          withdrawalAddress={withdrawalAddress}
          onClose={() => setShowModal(false)}
          depositChainProvider={getRpcUrl(senderChain)}
          withdrawChainProvider={getRpcUrl(receiverChain)}
          injectedProvider={injectedProvider}
          loginProvider={injectedProvider}
        />
      </ContainerModal>
    </Container>
  )
}

