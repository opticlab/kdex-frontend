import React from 'react'
import { Button, Heading, Text } from '@pancakeswap/uikit'
import { useCaverJsReact } from '@sixnetwork/caverjs-react-core'
import history from 'routerHistory'
import { useTranslation } from 'contexts/Localization'
import { CompetitionProps } from 'views/TradingCompetition/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

const MakeProfile: React.FC<CompetitionProps> = ({ onDismiss }) => {
  const { account } = useCaverJsReact()
  const { t } = useTranslation()

  const handleClick = () => {
    history.push(`${nftsBaseUrl}/profile/${account.toLowerCase()}`)
    onDismiss()
  }

  return (
    <>
      <Heading scale="md" mb="24px">
        {t('Make a profile!')}
      </Heading>
      <Text color="textSubtle">
        {t('It looks like you’ve disabled your account by removing your Pancake Collectible (NFT) profile picture.')}
      </Text>
      <Button mt="24px" width="100%" onClick={handleClick}>
        {t('Make a profile!')}
      </Button>
    </>
  )
}

export default MakeProfile
