import React, { useEffect } from 'react'
import { useCaverJsReact } from '@sixnetwork/caverjs-react-core'
import { useAppDispatch } from 'state'
import { useGetLeaderboardFilters, useGetLeaderboardLoadingState } from 'state/predictions/hooks'
import { LeaderboardLoadingState } from 'state/types'
import { filterLeaderboard } from 'state/predictions'
import PageLoader from 'components/Loader/PageLoader'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import Results from './components/Results'
import ConnectedWalletResult from './components/Results/ConnectedWalletResult'
import Filters from './components/Filters'

const Leaderboard = () => {
  const leaderboardLoadingState = useGetLeaderboardLoadingState()
  const filters = useGetLeaderboardFilters()
  const { account } = useCaverJsReact()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(filterLeaderboard({ filters }))
  }, [account, filters, dispatch])

  if (leaderboardLoadingState === LeaderboardLoadingState.INITIAL) {
    return <PageLoader />
  }

  return (
    <>
      <PageMeta />
      <Hero />
      <Filters />
      <ConnectedWalletResult />
      <Results />
    </>
  )
}

export default Leaderboard
