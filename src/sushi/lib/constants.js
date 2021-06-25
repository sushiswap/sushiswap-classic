import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0xFc7aD527e74b9502CCceD442d5c09cfF70d64bCb',
  },
  masterChef: {
    1: '0x5E3385D843CF0cB37ED67486CEF700De98a547f7',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSushi: {
    1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272'
  }
}

/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  // Perm Menu
  // WARNING: lpAddresses and tokenAddresses are the other way around on purpose, only for non-lp tokens
  {
    pid: 0,
    lpAddresses: {
      1: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
    },
    tokenAddresses: {
      1: '0x811beed0119b4afce20d2583eb608c6f7af1954f',
    },
    dexLPAddress: '0x811beed0119b4afce20d2583eb608c6f7af1954f',
    name: 'Roma (SHIB)',
    symbol: 'SHIB',
    tokenSymbol: 'SHIB',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x3301ee63fb29f863f2333bd4466acb46cd8323e6',
    },
    tokenAddresses: {
      1: '0xda3a20aad0c34fa742bd9813d45bbf67c787ae0b',
    },
    dexLPAddress: '0xda3a20aad0c34fa742bd9813d45bbf67c787ae0b',
    name: 'Plum (AKITA)',
    symbol: 'AKITA',
    tokenSymbol: 'AKITA',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3',
    },
    tokenAddresses: {
      1: '0x7b73644935b8e68019ac6356c40661e1bc315860',
    },
    dexLPAddress: '0x7b73644935b8e68019ac6356c40661e1bc315860',
    name: 'Cherry (ELON)',
    symbol: 'ELON',
    tokenSymbol: 'ELON',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    tokenAddresses: {
      1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    dexLPAddress: '',
    name: 'Heirloom (WETH)',
    symbol: 'WETH',
    tokenSymbol: 'WETH',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    },
    tokenAddresses: {
      1: '0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f',
    },
    dexLPAddress: '0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f',
    name: 'Beefstake (AAVE)',
    symbol: 'AAVE',
    tokenSymbol: 'AAVE',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    },
    tokenAddresses: {
      1: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
    },
    dexLPAddress: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
    name: 'Green (COMP)',
    symbol: 'COMP',
    tokenSymbol: 'COMP',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    tokenAddresses: {
      1: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
    },
    dexLPAddress: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
    name: 'San Marzano (UNI)',
    symbol: 'UNI',
    tokenSymbol: 'UNI',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    tokenAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    dexLPAddress: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    name: 'Campari (SUSHI)',
    symbol: 'SUSHI',
    tokenSymbol: 'SUSHI',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    tokenAddresses: {
      1: '0x43ae24960e5534731fc831386c07755a2dc33d47',
    },
    dexLPAddress: '0x43ae24960e5534731fc831386c07755a2dc33d47',
    name: 'Jubilee (SNX)',
    symbol: 'SNX',
    tokenSymbol: 'SNX',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    },
    tokenAddresses: {
      1: '0xc2adda861f89bbb333c90c492cb837741916a225',
    },
    dexLPAddress: '0xc2adda861f89bbb333c90c492cb837741916a225',
    name: 'MoneyMaker (MKR)',
    symbol: 'MKR',
    tokenSymbol: 'MKR',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    tokenAddresses: {
      1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    dexLPAddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    name: 'Santorini (LINK)',
    symbol: 'LINK',
    tokenSymbol: 'LINK',
    icon: '🍅',
    type: 'STAKE'
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0xd07Ed5D3567a2f6479d26E4b38e4974A423F6240',
    },
    tokenAddresses: {
      1: '0xFc7aD527e74b9502CCceD442d5c09cfF70d64bCb',
    },
    dexLPAddress: '',
    name: 'Tomato Plant',
    moreName: '(ETH-TOMATO LP)',
    symbol: 'ETH-TOMATO LP',
    tokenSymbol: 'ETH-TOMATO LP',
    icon: '🍅',
    type: 'LP'
  },
  {
    pid: 12,
    lpAddresses: {
      1: '0xFc7aD527e74b9502CCceD442d5c09cfF70d64bCb',
    },
    tokenAddresses: {
      1: '0xd07Ed5D3567a2f6479d26E4b38e4974A423F6240',
    },
    dexLPAddress: '',
    name: 'GMO Tomato',
    moreName: '(Stake TOMATO)',
    symbol: 'TOMATO',
    tokenSymbol: 'TOMATO',
    icon: '🍅',
    type: 'TOMATO-STAKE'
  },
  {
    pid: 13,
    lpAddresses: {
      1: '0x54Bb1f4526b5f04A4B26fFA80c7505304a42BfE1',
    },
    tokenAddresses: {
      1: '0xFc7aD527e74b9502CCceD442d5c09cfF70d64bCb',
    },
    dexLPAddress: '',
    name: 'Dog Tomato',
    moreName: '(SHIB-TOMATO LP)',
    symbol: 'SHIB-TOMATO LP',
    tokenSymbol: 'SHIB-TOMATO LP',
    icon: '🍅',
    type: 'LP'
  },
]