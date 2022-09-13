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

const Margem = styled.div`
  margin: 1rem;
`

const Credit = () => {
  return (
    <PageWrapper>
      <WarningWrapper>
        <AutoColumn gap="lg">
          <OutlineCard>
            <TYPE.main>Doe e ajude a suportar o projeto</TYPE.main>
            <TYPE.main>&nbsp;</TYPE.main>
            <TYPE.main fontSize="12px">Redes: [Polygon, BSC ou Ethereum]</TYPE.main>
            <GreyBadge fontSize="12px">
              <TYPE.main>0x4cb1F59c8ba09fED2BCE70943d2ad5dEc599e7d8</TYPE.main>
            </GreyBadge>
            <TYPE.main>&nbsp;</TYPE.main>
            <TYPE.main fontSize="12px">GitHub:</TYPE.main>
            <a href="https://github.com/diemesleno/upool" target="_blank" rel="noreferrer">
              <TYPE.main fontSize="12px">Contribua com o projeto</TYPE.main>
            </a>
          </OutlineCard>
        </AutoColumn>
        <Margem />
        <AutoColumn gap="lg">
          <OutlineCard>
            <TYPE.main>Feedback e Sugestões</TYPE.main>
            <TYPE.main>&nbsp;</TYPE.main>
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
