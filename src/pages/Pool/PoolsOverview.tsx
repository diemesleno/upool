import React, { useEffect, useMemo } from 'react'
import { PageWrapper } from 'pages/styled'
import { AutoColumn } from 'components/Column'
import { TYPE } from 'theme'
import PoolTable from 'components/pools/PoolTable'
import { useAllPoolData } from 'state/pools/hooks'
import { notEmpty } from 'utils'

export default function PoolPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // get all the pool datas that exist
  const allPoolData = useAllPoolData()
  const poolDatas = useMemo(() => {
    return Object.values(allPoolData)
      .map((p) => p.data)
      .filter(notEmpty)
  }, [allPoolData])
  return (
    <PageWrapper>
      <AutoColumn gap="lg">
        <TYPE.main>Todas Pools</TYPE.main>
        <PoolTable poolDatas={poolDatas} />
      </AutoColumn>
    </PageWrapper>
  )
}
