const ApolloClient = require('apollo-boost').ApolloClient;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache
const HttpLink = require('apollo-link-http').HttpLink
const fetch = require('cross-fetch/polyfill').fetch;


exports.client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph.voltswap.finance/subgraphs/name/meterio/uniswap-v2-subgraph',
    fetch: fetch
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})


exports.blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph.voltswap.finance/subgraphs/name/meter/blocks'
  }),
  cache: new InMemoryCache()
})