import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 3, 1) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      1001: '0xD216C9D706b08741a2868A7261fFa3626639211d',
      8217: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.cake,
  },
  {
    pid: 3,
    lpSymbol: 'CAKE-KLAY LP',
    lpAddresses: {
      1001: '0x48B10EAB664D98C5C6Df4b2e6276AC757EE6b269',
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
  {
    pid: 2,
    lpSymbol: 'KUSD',
    lpAddresses: {
      1001: '0x056efc1fc21f2303B2eB459b2BD3C49988BBeD4c',
      8217: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.kusd,
    quoteToken: serializedTokens.kusd,
  },
]

export default farms
