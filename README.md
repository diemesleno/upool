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


## Scripts de teste existentes

  - getPoolsRedes.js -> Busca as 3 melhores pools de cada uma das redes;
  - getPool.js -> Busca dados de uma pool específica;
  - getPools.js -> Busca as 3 melhores pools da rede Ethereum;

## Para executar qualquer um dos scripts
  
  ```
  node nome-do-script.js
  ```

*Observações versão 0.2:* 

- Já conseguimos trazer os mesmos dados de todas as redes (Ethereum, Polygon, Optimism e Arbitrum).
- O TVL retornado nos dados é o mesmo da app. Mas precisamos ver como fazer para encontrar o Volume 24h. 
- Seria interessante encontrar a média do volume dos últimos 7 dias.

