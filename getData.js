const axios = require("axios") 

const URL_ETHEREUM = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3"

query = `
   {
    pools(orderBy: volumeUSD, orderDirection: desc, first: 3){
        id
        volumeUSD,
        liquidity
        totalValueLockedUSD
        token0 {
            symbol
        }
        token1 {
            symbol
        }
    }
}
`

axios.post(URL_ETHEREUM, {query: query})
    .then((result) => {
        // console.log(result.data.data);
        const pools = result.data.data.pools;

        pools.forEach(function(pool){
            console.log(pool);
        });

    })
