import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      1001: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      8217: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-KLAY LP',
    lpAddresses: {
      1001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      8217: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'KUSD-KLAY LP',
    lpAddresses: {
      1001: '0xd67bc607fe1d02fe1f127fa5a9b9cc865804f9fb',
      8217: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.kusd,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
