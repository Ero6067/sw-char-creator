import React from 'react'
import {
  Nav,
  NavBrand,
  NavItems,
  NavItem,
  NavItemButton,
} from '../Styled/Navbar'

export default function NavbarStyledComponents() {
  return (
    <Nav>
      <NavBrand to="/">Cool Product</NavBrand>
      <NavItems>
        <NavItem to="/pricing">Pricing</NavItem>
        <NavItem to="/">Docs</NavItem>
        <NavItemButton to="/">Log in</NavItemButton>
        <NavItemButton primary to="/">
          Get Started For Free
        </NavItemButton>
      </NavItems>
    </Nav>
  )
}
