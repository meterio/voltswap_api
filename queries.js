const gql = require('graphql-tag').gql
const BUNDLE_ID = '1'

exports.SWAPS = gql` query Pairs 
{ pairs{
                   id
                  
                     token0{
                       id
                      derivedETH
                       decimals
                       name
                       symbol
                       tradeVolume
                     }
                     token1{
                       id
                      derivedETH
                       decimals
                       name
                       symbol
                       tradeVolume
                     }
                       
                     }
                   
                 }`

    exports.GET_BLOCK = gql`
        query blocks($timestampFrom: Int!, $timestampTo: Int!) {
          blocks(
            first: 1
            orderBy: timestamp
            orderDirection: asc
            where: { timestamp_gt: $timestampFrom, timestamp_lt: $timestampTo }
          ) {
            id
            number
            timestamp
          }
        }
      `


      exports.ETH_PRICE = (block) => {
        const queryString = block
          ? `
          query bundles {
            bundles(where: { id: ${BUNDLE_ID} } block: {number: ${block}}) {
              id
              ethPrice
            }
          }
        `
          : ` query bundles {
            bundles(where: { id: ${BUNDLE_ID} }) {
              id
              ethPrice
            }
          }
        `
        return gql(queryString)
      }