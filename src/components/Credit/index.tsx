import React from 'react'
import styled from 'styled-components'
import { OutlineCard, GreyBadge } from 'components/Card'
import { PageWrapper } from 'pages/styled'
import { TYPE } from 'theme'
import { AutoColumn } from 'components/Column'

const WarningWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Credit = () => {
  return (
    <PageWrapper>
      <WarningWrapper>
        <AutoColumn gap="lg">
          <OutlineCard>
            <TYPE.main>Doe e ajude a suportar o projeto</TYPE.main>
            <TYPE.main fontSize="12px">Redes: [Polygon, BSC ou Ethereum]</TYPE.main>
            <GreyBadge fontSize="12px">
              <TYPE.main>0x4cb1F59c8ba09fED2BCE70943d2ad5dEc599e7d8</TYPE.main>
            </GreyBadge>
            <TYPE.main fontSize="12px">
              GitHub:
              <a href="https://github.com/diemesleno/upool" target="_blank" rel="noreferrer">
                Contribua com o projeto
              </a>
            </TYPE.main>
          </OutlineCard>
        </AutoColumn>
        <AutoColumn gap="lg">
          <OutlineCard>
            <TYPE.main>Feedback e Sugestões</TYPE.main>
            <GreyBadge fontSize="12px">
              <TYPE.main>info@orangehat.wtf</TYPE.main>
            </GreyBadge>
          </OutlineCard>
        </AutoColumn>
      </WarningWrapper>
    </PageWrapper>
  )
}

export default Credit
