import { ChainId } from '@opticlab/kdex-sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  [ChainId.TESTNET]: 'https://api.baobab.klaytn.net:8651',
}

export default NETWORK_URLS
