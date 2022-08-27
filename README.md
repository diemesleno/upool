# Uniswap Pool

Informações:

Nunca fiz uso de *GraphQL* mas estou estudando
através da [Uniswap V3 Subgraph](https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v3)

Aparentemente, é possível realizar as mesmas
consultas e aplicações mais avançadas usando o
[SDK](https://docs.uniswap.org/sdk/introduction) da Uniswap.

## Instruções de execução:

a) Acesse o diretório do projeto e instale os módulos npm

    cd upool

    npm install

b) Execute o arquivo getData.js

    node getData.js

c) Teremos como resultado algo como:

```json
{
  id: '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
  volumeUSD: '266607022353.9382999745482821537591',
  liquidity: '21953627003762514032',
  totalValueLockedUSD: '259102499.6652214247343999901937142',
  token0: { symbol: 'USDC' },
  token1: { symbol: 'WETH' }
}
{
  id: '0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8',
  volumeUSD: '61084596648.42170181672069222862178',
  liquidity: '10518738656186438504',
  totalValueLockedUSD: '316946386.1247325361888332235637417',
  token0: { symbol: 'USDC' },
  token1: { symbol: 'WETH' }
}
{
  id: '0x11b815efb8f581194ae79006d24e0d814b7697f6',
  volumeUSD: '45803798961.40719964781299426653893',
  liquidity: '1883726256655409423',
  totalValueLockedUSD: '31828129.12294291059460419090365583',
  token0: { symbol: 'WETH' },
  token1: { symbol: 'USDT' }
}
```

*Observações:* 

- Ao executar o programa acima, como resultado temos dados apenas das pools da rede Ethereum. 
- Precisamos ver como fazer o mesmo com as demais redes (Polygon, Optimism, Arbitrum)
- O TVL retornado nos dados é o mesmo da app. Mas precisamos ver como fazer para encontrar o Volume 24h. 
- Seria interessante encontrar a média do volume dos últimos 7 dias.