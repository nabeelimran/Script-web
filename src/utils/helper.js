export const helper = {
    percentFormat: (num) => num.toFixed(4).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1'),
    numberFormat: (num) => num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
    currencyFormat: (num) => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const metamaskNetwor = {
    polygonTestnet: {
      chainName: 'Polygon Testnet',
      rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
      chainId: `0x${Number(80001).toString(16)}`,
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
      },
      blockExplorerUrls: ['https://mumbai-explorer.matic.today/']
    },
    ropstenTestnet: {
      chainName: 'Ropsten Test Network',
      rpcUrls: ['https://ropsten.infura.io/v3/'],
      chainId: `0x${Number(3).toString(16)}`,
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      blockExplorerUrls: ['https://ropsten.etherscan.io']
    },
    ethereumMainnet: {
      chainName: 'Ethereum Mainnet',
      rpcUrls: ['https://mainnet.infura.io/v3/'],
      chainId: `0x${Number(1).toString(16)}`,
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      blockExplorerUrls: ['https://etherscan.io']
    },
    scriptTestnet: {
      chainName: 'Script Testnet',
      rpcUrls: ['https://testeth-rpc-api.script.tv/rpc'],
      chainId: `0x${Number(382).toString(16)}`,
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      blockExplorerUrls: ['https://explorer.script.tv/']
    }
}
