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
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
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
  {
    pid: 12,
    lpAddresses: {
      1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'Sushi Party!',
    symbol: 'SUSHI-ETH SLP',
    tokenSymbol: 'SUSHI',
    icon: '🍣',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: 'USDC-ETH SLP',
    tokenSymbol: 'USDC',
    icon: '🐌',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Donald DAI',
    symbol: 'DAI-ETH SLP',
    tokenSymbol: 'DAI',
    icon: '🦆',
  },
  {
    pid: 21,
    lpAddresses: {
      1: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
    },
    tokenAddresses: {
      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    name: "BitCorn",
    symbol: 'WBTC-ETH SLP',
    tokenSymbol: 'WBTC',
    icon: '🌽',
  },
  {
    pid: 0,
    lpAddresses: {
      1: '0x06da0fd433C1A5d7a4faa01111c044910A184553',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Turtle',
    symbol: 'USDT-ETH SLP',
    tokenSymbol: 'USDT',
    icon: '🐢',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Whale',
    symbol: 'YFI-ETH SLP',
    tokenSymbol: 'YFI',
    icon: '🐋',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539',
    },
    tokenAddresses: {
      1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    },
    name: 'Spartan Dollar',
    symbol: 'SUSD-ETH SLP',
    tokenSymbol: 'SUSD',
    icon: '🦍',
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Toadie Marine',
    symbol: 'LINK-ETH SLP',
    tokenSymbol: 'LINK',
    icon: '🐸',
  },
  {
    pid: 37,
    lpAddresses: {
      1: '0xD75EA151a61d06868E31F8988D28DFE5E9df57B4',
    },
    tokenAddresses: {
      1: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    },
    name: 'Aave Boar',
    symbol: 'AAVE-ETH SLP',
    tokenSymbol: 'AAVE',
    icon: '🐗',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0x31503dcb60119a812fee820bb7042752019f2355',
    },
    tokenAddresses: {
      1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    },
    name: 'Compound Truffle',
    symbol: 'COMP-ETH SLP',
    tokenSymbol: 'COMP',
    icon: '🍄',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0xA1d7b2d891e3A1f9ef4bBC5be20630C2FEB1c470',
    },
    tokenAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Synthetic Snake',
    symbol: 'SNX-ETH SLP',
    tokenSymbol: 'SNX',
    icon: '🐍',
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0x001b6450083e531a5a7bf310bd2c1af4247e23d4',
    },
    tokenAddresses: {
      1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
    },
    name: 'Umami Squid',
    symbol: 'UMA-ETH SLP',
    tokenSymbol: 'UMA',
    icon: '🦑',
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0xA75F7c2F025f470355515482BdE9EFA8153536A8',
    },
    tokenAddresses: {
      1: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
    },
    name: 'Band-osaurus',
    symbol: 'BAND-ETH SLP',
    tokenSymbol: 'BAND',
    icon: '🦖',
  },
  {
    pid: 18,
    lpAddresses: {
      1: '0xdafd66636e2561b0284edde37e42d192f2844d40', //change this
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    name: 'UNI Unicorn',
    symbol: 'UNI-ETH SLP',
    tokenSymbol: 'UNI',
    icon: '🦄',
  },
  {
    pid: 44,
    lpAddresses: {
      1: '0x0f82e57804d0b1f6fab2370a43dcfad3c7cb239c',
    },
    tokenAddresses: {
      1: '0x0AaCfbeC6a24756c20D41914F2caba817C0d8521',
    },
    name: 'YAM',
    symbol: 'YAM-ETH SLP',
    tokenSymbol: 'YAM',
    icon: '🍠',
  },
  {
    pid: 13,
    lpAddresses: {
      1: '0x611cde65dea90918c0078ac0400a72b0d25b9bb1',
    },
    tokenAddresses: {
      1: '0x408e41876cccdc0f92210600ef50372656052a38',
    },
    name: 'REN Rhino',
    symbol: 'REN-ETH SLP',
    tokenSymbol: 'REN',
    icon: '🦏',
  },
  {
    pid: 17,
    lpAddresses: {
      1: '0x58Dc5a51fE44589BEb22E8CE67720B5BC5378009',
    },
    tokenAddresses: {
      1: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    },
    name: 'CRV Crocodile',
    symbol: 'CRV-ETH SLP',
    tokenSymbol: 'CRV',
    icon: '🐊',
  },
  {
    pid: 58,
    lpAddresses: {
      1: '0xaf988afF99d3d0cb870812C325C588D8D8CB7De8',
    },
    tokenAddresses: {
      1: '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
    },
    name: 'Bee KP3R',
    symbol: 'KP3R-ETH SLP',
    tokenSymbol: 'KP3R',
    icon: '🐝',
  },
  {
    pid: 101,
    lpAddresses: {
      1: '0x66ae32178640813f3c32a9929520bfe4fef5d167',
    },
    tokenAddresses: {
      1: '0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713',
    },
    name: 'COVER Shield',
    symbol: 'COVER-ETH SLP',
    tokenSymbol: 'COVER',
    icon: '🛡️',
  },
  // yearn current allocation
  {
    pid: 25,
    lpAddresses: {
      1: '0x382c4a5147Fd4090F7BE3A9Ff398F95638F5D39E',
    },
    tokenAddresses: {
      1: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
    },
    name: 'Yearn Synergy',
    symbol: 'yUSD-ETH',
    tokenSymbol: 'yUSD',
    icon: '🌀',
  },
  // Onsen Mids
  {
    pid: 33,
    lpAddresses: {
      1: '0xBa13afEcda9beB75De5c56BbAF696b880a5A50dD',
    },
    tokenAddresses: {
      1: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    },
    name: 'Onsen Mid',
    symbol: 'MKR-ETH SLP',
    tokenSymbol: 'MKR',
    icon: '♨️',
  },
  {
    pid: 36,
    lpAddresses: {
      1: '0x742c15d71eA7444964BC39b0eD729B3729ADc361',
    },
    tokenAddresses: {
      1: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07',
    },
    name: 'Onsen Mid',
    symbol: 'OMG-ETH SLP',
    tokenSymbol: 'OMG',
    icon: '♨️',
  },
  {
    pid: 31,
    lpAddresses: {
      1: '0x6463Bd6026A2E7bFab5851b62969A92f7cca0eB6',
    },
    tokenAddresses: {
      1: '0x584bC13c7D411c00c01A62e8019472dE68768430',
    },
    name: 'Onsen Mid',
    symbol: 'HEGIC-ETH SLP',
    tokenSymbol: 'HEGIC',
    icon: '♨️',
  },
  {
    pid: 22,
    lpAddresses: {
      1: '0xf169CeA51EB51774cF107c88309717ddA20be167',
    },
    tokenAddresses: {
      1: '0x2ba592F78dB6436527729929AAf6c908497cB200',
    },
    name: 'Onsen Mid',
    symbol: 'CREAM-ETH SLP',
    tokenSymbol: 'CREAM',
    icon: '♨️',
  },
  {
    pid: 63,
    lpAddresses: {
      1: '0xdff71165a646be71fcfbaa6206342faa503aed5d',
    },
    tokenAddresses: {
      1: '0x36F3FD68E7325a35EB768F1AedaAe9EA0689d723',
    },
    name: 'Onsen Mid',
    symbol: 'ESD-ETH SLP',
    tokenSymbol: 'ESD',
    icon: '♨️',
  },
  {
    pid: 100,
    lpAddresses: {
      1: '0x201e6a9e75df132a8598720433af35fe8d73e94d',
    },
    tokenAddresses: {
      1: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
    },
    name: 'Onsen Mid',
    symbol: 'ANT-ETH SLP',
    tokenSymbol: 'ANT',
    icon: '♨️',
  },
  {
    pid: 65,
    lpAddresses: {
      1: '0xef4f1d5007b4ff88c1a56261fec00264af6001fb',
    },
    tokenAddresses: {
      1: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
    },
    name: 'Onsen Mid',
    symbol: 'PNK-ETH SLP',
    tokenSymbol: 'PNK',
    icon: '♨️',
  },
  {
    pid: 69,
    lpAddresses: {
      1: '0xfb3cd0b8a5371fe93ef92e3988d30df7931e2820',
    },
    tokenAddresses: {
      1: '0xe28b3b32b6c345a34ff64674606124dd5aceca30',
    },
    name: 'Onsen Mid',
    symbol: 'INJ-ETH SLP',
    tokenSymbol: 'INJ',
    icon: '♨️',
  },
  {
    pid: 83,
    lpAddresses: {
      1: '0x26d8151e631608570f3c28bec769c3afee0d73a3',
    },
    tokenAddresses: {
      1: '0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3',
    },
    name: 'Onsen Mid',
    symbol: 'DSD-USDC SLP',
    tokenSymbol: 'DSD',
    icon: '♨️',
  },
  {
    pid: 85,
    lpAddresses: {
      1: '0x8b00ee8606cc70c2dce68dea0cefe632cca0fb7b',
    },
    tokenAddresses: {
      1: '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
    },
    name: 'Onsen Mid',
    symbol: 'UST-ETH SLP',
    tokenSymbol: 'UST',
    icon: '♨️',
  },
  {
    pid: 96,
    lpAddresses: {
      1: '0xf55c33d94150d93c2cfb833bcca30be388b14964',
    },
    tokenAddresses: {
      1: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    },
    name: 'Onsen Mid',
    symbol: 'ALPHA-ETH SLP',
    tokenSymbol: 'ALPHA',
    icon: '♨️',
  },
  // Onsen Lows
  {
    pid: 53,
    lpAddresses: {
      1: '0x364248b2f1f57C5402d244b2D469A35B4C0e9dAB',
    },
    tokenAddresses: {
      1: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
    },
    name: 'Onsen Low',
    symbol: 'AKRO-ETH SLP',
    tokenSymbol: 'AKRO',
    icon: '♨️',
  },
  {
    pid: 35,
    lpAddresses: {
      1: '0x269Db91Fc3c7fCC275C2E6f22e5552504512811c',
    },
    tokenAddresses: {
      1: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
    },
    name: 'Onsen Low',
    symbol: 'PICKLE-ETH SLP',
    tokenSymbol: 'PICKLE',
    icon: '♨️',
  },
  {
    pid: 42,
    lpAddresses: {
      1: '0x34b13F8CD184F55d0Bd4Dd1fe6C07D46f245c7eD',
    },
    tokenAddresses: {
      1: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b',
    },
    name: 'Onsen Low',
    symbol: 'DPI-ETH SLP',
    tokenSymbol: 'DPI',
    icon: '♨️',
  },
  {
    pid: 66,
    lpAddresses: {
      1: '0x1c580cc549d03171b13b55074dc1658f60641c73',
    },
    tokenAddresses: {
      1: '0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1',
    },
    name: 'Onsen Low',
    symbol: 'CVP-ETH SLP',
    tokenSymbol: 'CVP',
    icon: '♨️',
  },
  {
    pid: 67,
    lpAddresses: {
      1: '0xf45d97f9d457661783146d63dd13da20ce9bf847',
    },
    tokenAddresses: {
      1: '0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d',
    },
    name: 'Onsen Low',
    symbol: 'YETI-ETH SLP',
    tokenSymbol: 'YETI',
    icon: '♨️',
  },
  {
    pid: 70,
    lpAddresses: {
      1: '0x44d34985826578e5ba24ec78c93be968549bb918',
    },
    tokenAddresses: {
      1: '0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9',
    },
    name: 'Onsen Low',
    symbol: 'BOR-ETH SLP',
    tokenSymbol: 'BOR',
    icon: '♨️',
  },
  {
    pid: 71,
    lpAddresses: {
      1: '0x23a9292830fc80db7f563edb28d2fe6fb47f8624',
    },
    tokenAddresses: {
      1: '0xb753428af26e81097e7fd17f40c88aaa3e04902c',
    },
    name: 'Onsen Low',
    symbol: 'SFI-ETH SLP',
    tokenSymbol: 'SFI',
    icon: '♨️',
  },
  {
    pid: 99,
    lpAddresses: {
      1: '0xb1d38026062ac10feda072ca0e9b7e35f1f5795a',
    },
    tokenAddresses: {
      1: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
    },
    name: 'Onsen Low',
    symbol: 'DUSD-ETH SLP',
    tokenSymbol: 'DUSD',
    icon: '♨️',
  },
  {
    pid: 73,
    lpAddresses: {
      1: '0x110492b31c59716ac47337e616804e3e3adc0b4a',
    },
    tokenAddresses: {
      1: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
    },
    name: 'Onsen Low',
    symbol: 'BADGER-WBTC SLP',
    tokenSymbol: 'BADGER',
    icon: '♨️',
  },
  {
    pid: 74,
    lpAddresses: {
      1: '0x9360b76f8f5f932ac33d46a3ce82ad6c52a713e5',
    },
    tokenAddresses: {
      1: '0xa8e7ad77c60ee6f30bac54e2e7c0617bd7b5a03e',
    },
    name: 'Onsen Low',
    symbol: 'zLOT-ETH SLP',
    tokenSymbol: 'zLOT',
    icon: '♨️',
  },
  {
    pid: 75,
    lpAddresses: {
      1: '0xa73df646512c82550c2b3c0324c4eedee53b400c',
    },
    tokenAddresses: {
      1: '0x0954906da0bf32d5479e25f46056d22f08464cab',
    },
    name: 'Onsen Low',
    symbol: 'INDEX-ETH SLP',
    tokenSymbol: 'INDEX',
    icon: '♨️',
  },
  {
    pid: 81,
    lpAddresses: {
      1: '0x53e9fb796b2feb4b3184afdf601c2a2797548d88',
    },
    tokenAddresses: {
      1: '0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68',
    },
    name: 'Onsen Low',
    symbol: 'oBTC-ETH SLP',
    tokenSymbol: 'oBTC',
    icon: '♨️',
  },
  {
    pid: 82,
    lpAddresses: {
      1: '0xe5f06db4f3473e7e35490f1f98017728496fe81e',
    },
    tokenAddresses: {
      1: '0x26cf82e4ae43d31ea51e72b663d26e26a75af729',
    },
    name: 'Onsen Low',
    symbol: 'mbBASED-ETH SLP',
    tokenSymbol: 'mbBASED',
    icon: '♨️',
  },
  {
    pid: 86,
    lpAddresses: {
      1: '0xaa500101c73065f755ba9b902d643705ef2523e3',
    },
    tokenAddresses: {
      1: '0xef9cd7882c067686691b6ff49e650b43afbbcc6b',
    },
    name: 'Onsen Low',
    symbol: 'FNX-ETH SLP',
    tokenSymbol: 'FNX',
    icon: '♨️',
  },
  {
    pid: 92,
    lpAddresses: {
      1: '0xb2c29e311916a346304f83aa44527092d5bd4f0f',
    },
    tokenAddresses: {
      1: '0x8888801af4d980682e47f1a9036e589479e835c5',
    },
    name: 'Onsen Low',
    symbol: 'MPH-ETH SLP',
    tokenSymbol: 'MPH',
    icon: '♨️',
  },
  {
    pid: 95,
    lpAddresses: {
      1: '0xfceaaf9792139bf714a694f868a215493461446d',
    },
    tokenAddresses: {
      1: '0x4c19596f5aaff459fa38b0f7ed92f11ae6543784',
    },
    name: 'Onsen Low',
    symbol: 'TRU-ETH SLP',
    tokenSymbol: 'TRU',
    icon: '♨️',
  },
  {
    pid: 98,
    lpAddresses: {
      1: '0x71817445d11f42506f2d7f54417c935be90ca731',
    },
    tokenAddresses: {
      1: '0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd',
    },
    name: 'Onsen Low',
    symbol: 'CRETH2-ETH SLP',
    tokenSymbol: 'CRETH2',
    icon: '♨️',
  },
  // Onsen Gems
  {
    pid: 48,
    lpAddresses: {
      1: '0x97f34c8E5992EB985c5F740e7EE8c7e48a1de76a',
    },
    tokenAddresses: {
      1: '0xad32A8e6220741182940c5aBF610bDE99E737b2D',
    },
    name: 'Onsen Gem',
    symbol: 'DOUGH-ETH SLP',
    tokenSymbol: 'DOUGH',
    icon: '♨️',
  },
  {
    pid: 59,
    lpAddresses: {
      1: '0xC5Fa164247d2F8D68804139457146eFBde8370F6',
    },
    tokenAddresses: {
      1: '0xCa3FE04C7Ee111F0bbb02C328c699226aCf9Fd33',
    },
    name: 'Onsen Gem',
    symbol: 'SEEN-ETH SLP',
    tokenSymbol: 'SEEN',
    icon: '♨️',
  },
  {
    pid: 68,
    lpAddresses: {
      1: '0x4441eb3076f828d5176f4fe74d7c775542dae106',
    },
    tokenAddresses: {
      1: '0x1f3f9d3068568f8040775be2e8c03c103c61f3af',
    },
    name: 'Onsen Gem',
    symbol: 'ARCH-ETH SLP',
    tokenSymbol: 'ARCH',
    icon: '♨️',
  },
  {
    pid: 72,
    lpAddresses: {
      1: '0xb12aa722a3a4566645f079b6f10c89a3205b6c2c',
    },
    tokenAddresses: {
      1: '0x20c36f062a31865bed8a5b1e512d9a1a20aa333a',
    },
    name: 'Onsen Gem',
    symbol: 'DFD-ETH SLP',
    tokenSymbol: 'DFD',
    icon: '♨️',
  },
  {
    pid: 76,
    lpAddresses: {
      1: '0xadeaa96a81ebba4e3a5525a008ee107385d588c3',
    },
    tokenAddresses: {
      1: '0x87edffde3e14c7a66c9b9724747a1c5696b742e6',
    },
    name: 'Onsen Gem',
    symbol: 'SWAG-ETH SLP',
    tokenSymbol: 'SWAG',
    icon: '♨️',
  },
  {
    pid: 77,
    lpAddresses: {
      1: '0xf1360c4ae1cead17b588ec1111983d2791b760d3',
    },
    tokenAddresses: {
      1: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
    },
    name: 'Onsen Gem',
    symbol: 'JRT-ETH SLP',
    tokenSymbol: 'JRT',
    icon: '♨️',
  },
  {
    pid: 78,
    lpAddresses: {
      1: '0x0040a2cebc65894bc2cfb57565f9acfa33fab137',
    },
    tokenAddresses: {
      1: '0xdbdd6f355a37b94e6c7d32fef548e98a280b8df5',
    },
    name: 'Onsen Gem',
    symbol: 'UWL-ETH',
    tokenSymbol: 'UWL',
    icon: '♨️',
  },
  {
    pid: 79,
    lpAddresses: {
      1: '0x9cd028b1287803250b1e226f0180eb725428d069',
    },
    tokenAddresses: {
      1: '0x903bef1736cddf2a537176cf3c64579c3867a881',
    },
    name: 'Onsen Gem',
    symbol: 'ICHI-ETH SLP',
    tokenSymbol: 'ICHI',
    icon: '♨️',
  },
  {
    pid: 80,
    lpAddresses: {
      1: '0x67e475577b4036ee4f0f12fa2d538ed18cef48e3',
    },
    tokenAddresses: {
      1: '0x9d47894f8becb68b9cf3428d256311affe8b068b',
    },
    name: 'Onsen Gem',
    symbol: '$ROPE-ETH SLP',
    tokenSymbol: '$ROPE',
    icon: '♨️',
  },
  {
    pid: 84,
    lpAddresses: {
      1: '0xab3f8e0214d862bf7965d3cec7431d7c1a85cb34',
    },
    tokenAddresses: {
      1: '0x44ea84a85616f8e9cd719fc843de31d852ad7240',
    },
    name: 'Onsen Gem',
    symbol: 'nTRUMP-DAI SLP',
    tokenSymbol: 'nTRUMP',
    icon: '♨️',
  },
  {
    pid: 87,
    lpAddresses: {
      1: '0xeb1b57d4f7d4557b032b66c422bc94a8e4af859e',
    },
    tokenAddresses: {
      1: '0xe4f726adc8e89c6a6017f01eada77865db22da14',
    },
    name: 'Onsen Gem',
    symbol: 'BCP-ETH SLP',
    tokenSymbol: 'BCP',
    icon: '♨️',
  },
  {
    pid: 88,
    lpAddresses: {
      1: '0x5f30aac9a472f6c33d5284f9d340c0d57ef33697',
    },
    tokenAddresses: {
      1: '0x17525e4f4af59fbc29551bc4ece6ab60ed49ce31',
    },
    name: 'Onsen Gem',
    symbol: 'YPIE-ETH SLP',
    tokenSymbol: 'YPIE',
    icon: '♨️',
  },
  {
    pid: 89,
    lpAddresses: {
      1: '0x83e5e791f4ab29d1b0941bc4d00f3d6027d1dae5',
    },
    tokenAddresses: {
      1: '0x78f225869c08d478c34e5f645d07a87d3fe8eb78',
    },
    name: 'Onsen Gem',
    symbol: 'DEFI+L-ETH SLP',
    tokenSymbol: 'DEFI+L',
    icon: '♨️',
  },
  {
    pid: 90,
    lpAddresses: {
      1: '0xd8b8b575c943f3d63638c9563b464d204ed8b710',
    },
    tokenAddresses: {
      1: '0x07150e919b4de5fd6a63de1f9384828396f25fdc',
    },
    name: 'Onsen Gem',
    symbol: 'BASE-ETH SLP',
    tokenSymbol: 'BASE',
    icon: '♨️',
  },
  {
    pid: 91,
    lpAddresses: {
      1: '0xc2b0f2a7f736d3b908bdde8608177c8fc28c1690',
    },
    tokenAddresses: {
      1: '0x3a880652f47bfaa771908c07dd8673a787daed3a',
    },
    name: 'Onsen Gem',
    symbol: 'DDX-USDC SLP',
    tokenSymbol: 'DDX',
    icon: '♨️',
  },
  {
    pid: 93,
    lpAddresses: {
      1: '0x98c2f9d752e044dc2e1f1743bf0b76a7096eceb2',
    },
    tokenAddresses: {
      1: '0xf8c3527cc04340b208c854e985240c02f7b7793f',
    },
    name: 'Onsen Gem',
    symbol: 'FRONT-USDT SLP',
    tokenSymbol: 'FRONT',
    icon: '♨️',
  },
  {
    pid: 94,
    lpAddresses: {
      1: '0x8c2e6a4af15c94cf4a86cd3c067159f08571d780',
    },
    tokenAddresses: {
      1: '0xe4ae84448db5cfe1daf1e6fb172b469c161cb85f',
    },
    name: 'Onsen Gem',
    symbol: 'UOP-ETH SLP',
    tokenSymbol: 'UOP',
    icon: '♨️',
  }
]
