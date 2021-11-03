import { useEffect, useState, useRef } from 'react'
import { useCaverJsReact } from '@sixnetwork/caverjs-react-core'
import { CaverProvider } from 'klaytn-providers'
import { simpleRpcProvider } from 'utils/providers'
// eslint-disable-next-line import/no-unresolved
import { CaverJsReactContextInterface } from '@sixnetwork/caverjs-react-core/dist/types'

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = (): CaverJsReactContextInterface<CaverProvider> => {
  const { library, chainId, ...caverJsReact } = useCaverJsReact()
  const refEth = useRef(library)
  const [provider, setProvider] = useState(library || simpleRpcProvider)

  useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library || simpleRpcProvider)
      refEth.current = library
    }
  }, [library])

  return { library: provider, chainId: chainId ?? parseInt(process.env.REACT_APP_CHAIN_ID, 10), ...caverJsReact }
}

export default useActiveWeb3React
