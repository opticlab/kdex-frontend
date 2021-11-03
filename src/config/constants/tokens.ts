import { ChainId, Token } from '@pancakeswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wbnb: new Token(
    MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(MAINNET, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'BNB', 'BNB', 'https://www.binance.com/'),
  cake: new Token(
    MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  kusd: new Token(
    MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  syrup: new Token(
    MAINNET,
    '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
}

export const testnetTokens = {
  wbnb: new Token(
    TESTNET,
    '0x5c9c987e08bed353a5c304b76ccca6f316b28847',
    18,
    'WKLAY',
    'Wrapped Klay',
    'https://www.klaytn.com/',
  ),
  cake: new Token(
    TESTNET,
    '0xD216C9D706b08741a2868A7261fFa3626639211d',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  kusd: new Token(
    TESTNET,
    '0x056efc1fc21f2303B2eB459b2BD3C49988BBeD4c',
    18,
    'KUSD',
    'Klaytn USD',
    'https://www.paxos.com/busd/',
  ),
  syrup: new Token(
    TESTNET,
    '0xAeB040635279aFa6cC3eE1097816244C94d3ee3E',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  kay: new Token(
    TESTNET,
    '0x94e5b0a5fe58595a14d123a27ecc1feab4d3f5e0',
    16,
    'KAY',
    'Kay Token',
    'https://www.bakeryswap.org/',
  ),
  ross: new Token(
    TESTNET,
    '0x9f25b88e25f74b711d38c228fabbb5178b5f6864',
    8,
    'ROSS',
    'Ross Token',
    'https://www.bakeryswap.org/',
  ),
  damon: new Token(
    TESTNET,
    '0x66f80d658792765ae76c64c1110d003930797062',
    18,
    'DAMON',
    'Damon Token',
    'https://www.bakeryswap.org/',
  ),
  luan: new Token(
    TESTNET,
    '0x99ac0f642821c33edcbeaf079ad691b72b495de0',
    6,
    'LUAN',
    'Luan Token',
    'https://www.bakeryswap.org/',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
