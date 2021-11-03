import { useEffect } from 'react'
import { useCaverJsReact } from '@sixnetwork/caverjs-react-core'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { State, AchievementState } from '../types'
import { fetchAchievements } from '.'

export const useFetchAchievements = () => {
  const { account } = useCaverJsReact()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (account) {
      dispatch(fetchAchievements(account))
    }
  }, [account, dispatch])
}

export const useAchievements = () => {
  const achievements: AchievementState = useSelector((state: State) => state.achievements)
  return achievements
}
