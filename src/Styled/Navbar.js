import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 40px;

  /* uses SASS-like nesting */
  @media (max-width: 786px) {
    flex-direction: column;
  }
`

export const Navbrand = styled(Link)``
export const NavItems = styled.ul``
export const Navitem = styled.li``
export const LinkButton = styled(Link)``
