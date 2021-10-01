const { client } = require('../client')
const { SWAPS, ETH_PRICE } = require('../queries')
const catchAsync = require("../utils/catchAsync");






const convertToUniswapSample = async (result) => {
  let eth_price = await await getEthPrice()


  const uniswapSample = result.data.pairs.map(data => {
    let object = {
      [`${data.token0.id}_${data.token0.id}`]: {
        base_id: data.token0.id,
        base_name: data.token0.name,
        base_symbol: data.token0.symbol,
        quote_id: data.token1.id,
        quote_name: data.token1.name,
        quote_symbol: data.token1.symbol,
        last_price: Number(data.token0.derivedETH) * Number(eth_price),
        base_volume: data.token0.tradeVolume,
        quote_volume: data.token1.tradeVolume

      }
    }
    return object


  })

  return uniswapSample


}


exports.getPairs = catchAsync(async (req, res, next) => {

  let result = await client.query({
    query: SWAPS,
    fetchPolicy: 'cache-first'
  })

  var data = await convertToUniswapSample(result)

  res.status(200).json(
    data
  );


  //console.log(JSON.parse(JSON.stringify(result)))

})


const getEthPrice = async () => {


  let ethPrice = 0


  try {

    let result = await client.query({
      query: ETH_PRICE(),
      fetchPolicy: 'cache-first'
    })

    const currentPrice = result?.data?.bundles[0]?.ethPrice

    ethPrice = currentPrice

  } catch (e) {
    console.log(e)
  }

  return ethPrice
}




