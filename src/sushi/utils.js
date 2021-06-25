import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getMasterChefAddress = (sushi) => {
  return sushi && sushi.masterChefAddress
}
export const getSushiAddress = (sushi) => {
  return sushi && sushi.sushiAddress
}
export const getWethContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.weth
}

export const getMasterChefContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChef
}
export const getSushiContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.sushi
}

export const getXSushiStakingContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.xSushiStaking
}

export const getFarms = (sushi) => {
  return sushi
    ? sushi.contracts.pools.map(
      ({
        pid,
        name,
        moreName,
        symbol,
        icon,
        tokenAddress,
        tokenSymbol,
        tokenContract,
        lpAddress,
        lpContract,
      }) => ({
        pid,
        id: symbol,
        name,
        moreName,
        lpToken: symbol,
        lpTokenAddress: lpAddress,
        lpContract,
        tokenAddress,
        tokenSymbol,
        tokenContract,
        earnToken: 'sushi',
        earnTokenAddress: sushi.contracts.sushi.options.address,
        icon,
      }),
    )
    : []
}

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => {
  return masterChefContract.methods.pendingSushi(pid, account).call()
}

export const getTotalLPWethValue = async (
  masterChefContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // WETH-TokenX LP tokens
  if (pid == 11) {
    // Get balance of the token address
    const tokenAmountWholeLP = await tokenContract.methods
      .balanceOf(lpContract.options.address)
      .call()
    const tokenDecimals = await tokenContract.methods.decimals().call()
    // Get the share of lpContract that masterChefContract owns
    const balance = await lpContract.methods
      .balanceOf(masterChefContract.options.address)
      .call()
    // Convert that into the portion of total lpContract = p1
    const totalSupply = await lpContract.methods.totalSupply().call()
    // Get total weth value for the lpContract = w1
    const lpContractWeth = await wethContract.methods
      .balanceOf(lpContract.options.address)
      .call()
    // Return p1 * w1 * 2
    const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
    const lpWethWorth = new BigNumber(lpContractWeth)
    const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
    // Calculate
    const tokenAmount = new BigNumber(tokenAmountWholeLP)
      .times(portionLp)
      .div(new BigNumber(10).pow(tokenDecimals))

    const wethAmount = new BigNumber(lpContractWeth)
      .times(portionLp)
      .div(new BigNumber(10).pow(18))

    return {
      tokenAmount,
      wethAmount,
      totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
      tokenPriceInWeth: wethAmount.div(tokenAmount),
      poolWeight: await getPoolWeight(masterChefContract, pid),
    }
  } else if (pid == 12) { // non-WETH LP token
    let ret = await getTotalNonWethLPWethValue(
      masterChefContract,
      wethContract,
      lpContract,
      tokenContract,
      pid,
    )
    return ret;
  } else if (pid == 3) { // WETH token
    let ret = await getTotalWethWethValue(
      masterChefContract,
      wethContract,
      lpContract,
      tokenContract,
      pid,
    )
    return ret;
  } else { // Non-lp ERC20 tokens
    let ret = await getTotalNonLPWethValue(
      masterChefContract,
      wethContract,
      lpContract,
      tokenContract,
      pid,
    )
    return ret;
  }
}

export const getTotalNonWethLPWethValue = async (
  masterChefContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // WETH/Tomato LP
  const wethTomatoLpContract = "0x061Cd6ec213Cd324221e89B1a2c1a3EF17BF1278"

  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  // WETH/Tomato calc
  const tokenAmountWholeLP2 = await tokenContract.methods
    .balanceOf(wethTomatoLpContract)
    .call()

  const portionLp2 = new BigNumber(tokenAmount).times(new BigNumber(10).pow(tokenDecimals)).div(new BigNumber(tokenAmountWholeLP2))
  const lpContractWeth2 = await wethContract.methods
    .balanceOf(wethTomatoLpContract)
    .call()
  const lpWethWorth2 = new BigNumber(lpContractWeth2)
  const totalLpWethValue2 = portionLp2.times(lpWethWorth2).times(new BigNumber(2))

  const wethAmount = new BigNumber(lpContractWeth2)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))

  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue2.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(masterChefContract, pid),
  }
}

// tokenContract and lpContract are switched on purpose
export const getTotalNonLPWethValue = async (
  masterChefContract,
  wethContract,
  tokenContract,
  lpContract,
  pid,
) => {
  // Get the share of tokenContract that masterChefContract owns
  // div by 2 to get LP effect since deposit to uni needs two tokens
  const balance = new BigNumber(await tokenContract.methods
    .balanceOf(masterChefContract.options.address)
    .call())
    .div(new BigNumber(2))
  // Convert that into the portion of total lpContract = p1

  const totalSupply = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Get total weth value for the lpContract = w1


  const lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = balance;

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))

  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(masterChefContract, pid),
  }
}

export const getTotalWethWethValue = async (
  masterChefContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // Get the share of tokenContract that masterChefContract owns
  // div by 2 to get LP effect since deposit to uni needs two tokens
  const balance = new BigNumber(await tokenContract.methods
    .balanceOf(masterChefContract.options.address)
    .call())

  const totalLpWethValue = balance
  // Calculate
  const tokenAmount = balance.div(new BigNumber(2));
  const wethAmount = balance.div(new BigNumber(2));

  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(masterChefContract, pid),
  }
}

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const approveAddress = async (lpContract, address, account) => {
  return lpContract.methods
    .approve(address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const getSushiSupply = async (sushi) => {
  return new BigNumber(await sushi.contracts.sushi.methods.totalSupply().call())
}

export const getXSushiSupply = async (sushi) => {
  return new BigNumber(await sushi.contracts.xSushiStaking.methods.totalSupply().call())
}

export const stake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}

export const enter = async (contract, amount, account) => {
  debugger
  return contract.methods
      .enter(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
}

export const leave = async (contract, amount, account) => {
  return contract.methods
      .leave(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
}
