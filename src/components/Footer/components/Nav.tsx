import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x82bd290afa5cC1b75F46822fEC415E2be51D7D46#code"
      >
        Etherscan
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        SushiSwap SUSHI-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="https://discord.gg/QR9fps7dPx">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/Tomato-Token/tomato-token-classic">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/tomatotoken">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/joinchat/YKLaxqnJU-82ODgx">
        TG
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
