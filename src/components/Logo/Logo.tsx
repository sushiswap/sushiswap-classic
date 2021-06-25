import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/img/new-tomato-logo.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={logo} height="48" style={{ marginTop: -4 }} />
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 48px;
  min-width: 48px;
  padding: 0;
  text-decoration: none;
`

export default Logo
