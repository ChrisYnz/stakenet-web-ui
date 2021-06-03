interface NETWORK {
  assetId: string,
  chainName: string,
  chainId: number,
  assets: ASSET_DICTIONARY
}

interface ASSET_DICTIONARY {
  [index: string]: string;
}

interface SUPPORTED_SWAPS {
  depositChainId: number,
  depositChainName: string,
  withdrawChains: WITHDRAW_CHAIN[]
}

interface WITHDRAW_CHAIN {
  withdrawChainId: number,
  withdrawChainName: string,
  suportedAssets: string[]
}

export interface OPTION_SELECT {
  name: string,
  value: number
}

export const NETWORKS: NETWORK[] = [
  {
    assetId: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    chainName: 'ETH',
    chainId: 1,
    assets: {
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      WETH: '0x0000000000000000000000000000000000000000'
    },
  },
  {
    assetId: '0x0000000000000000000000000000000000000000',
    chainName: 'xDai Chain',
    chainId: 100,
    assets: {
      DAI: '0x0000000000000000000000000000000000000000',
      USDC: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
      USDT: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
      UNI: '0x4537e328bf7e4efa29d05caea260d7fe26af9d74'
    },
  },
  {
    assetId: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    chainName: 'Matic Mainnet',
    chainId: 137,
    assets: {
      DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      UNI: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
      WETH: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
    },
  },
  {
    assetId: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    chainName: 'Binance Smart Chain Mainnet',
    chainId: 56,
    assets: {
      DAI: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      USDC: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      USDT: '0x55d398326f99059fF775485246999027B3197955',
      UNI: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1'
    },
  },
];


export const SUPPORTED_SWAPS: SUPPORTED_SWAPS[] = [
  {
    "depositChainId": 1,
    "depositChainName": "ETH Mainnet",
    withdrawChains: [
      {
        "withdrawChainId": 137,
        "withdrawChainName": "Matic Mainnet",
        "suportedAssets": ['USDC', 'WETH']
      },
      {
        "withdrawChainId": 100,
        "withdrawChainName": "XDAI Mainnet",
        "suportedAssets": ['DAI']
      },
    ]
  },
  {
    "depositChainId": 56,
    "depositChainName": "BSC Mainnet",
    withdrawChains: [
      {
        "withdrawChainId": 100,
        "withdrawChainName": "BSC Mainnet",
        "suportedAssets": ['DAI', 'UNI', 'USDC', 'USDT']
      },
      {
        "withdrawChainId": 137,
        "withdrawChainName": "Matic Mainnet",
        "suportedAssets": ['DAI', 'UNI', 'USDC', 'USDT']
      }
    ]
  },
  {
    "depositChainId": 100,
    "depositChainName": "XDAI",
    withdrawChains: [
      {
        "withdrawChainId": 1,
        "withdrawChainName": "ETH Mainnet",
        "suportedAssets": ['DAI']
      },
      {
        "withdrawChainId": 56,
        "withdrawChainName": "BSC Mainnet",
        "suportedAssets": ['DAI', 'UNI', 'USDC', 'USDT']
      },
      {
        "withdrawChainId": 137,
        "withdrawChainName": "Matic Mainnet",
        "suportedAssets": ['DAI', 'UNI', 'USDC', 'USDT']
      }
    ]
  },
  {
    "depositChainId": 137,
    "depositChainName": "Matic Mainnet",
    withdrawChains: [
      {
        "withdrawChainId": 1,
        "withdrawChainName": "ETH Mainnet",
        "suportedAssets": ['USDC']
      },
      {
        "withdrawChainId": 56,
        "withdrawChainName": "BSC Mainnet",
        "suportedAssets": ['DAI', 'UNI', 'USDC', 'USDT']
      },
      {
        "withdrawChainId": 100,
        "withdrawChainName": "XDAI",
        "suportedAssets": ['DAI', 'UNI', 'USDC', 'USDT']
      }
    ]
  }
]