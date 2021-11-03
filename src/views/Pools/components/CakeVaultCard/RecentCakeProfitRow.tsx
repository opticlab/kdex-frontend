import React from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import { useCaverJsReact } from '@sixnetwork/caverjs-react-core'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useCakeVault } from 'state/pools/hooks'
import { getCakeVaultEarnings } from 'views/Pools/helpers'
import RecentCakeProfitBalance from './RecentCakeProfitBalance'

const RecentCakeProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useCaverJsReact()
  const {
    pricePerFullShare,
    userData: { cakeAtLastUserAction, userShares, lastUserActionTime },
  } = useCakeVault()
  const cakePriceBusd = usePriceCakeBusd()
  const { hasAutoEarnings, autoCakeToDisplay, autoUsdToDisplay } = getCakeVaultEarnings(
    account,
    cakeAtLastUserAction,
    userShares,
    pricePerFullShare,
    cakePriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent CAKE profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentCakeProfitBalance
          cakeToDisplay={autoCakeToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentCakeProfitCountdownRow
