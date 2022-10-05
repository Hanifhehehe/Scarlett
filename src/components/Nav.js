import React from 'react'
import NavHamburger from './NavHamburger'
import { StyledNav } from './style/StyledNav'

export default function Nav() {
  return (
    <StyledNav>
      <nav>
        <NavHamburger />
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Hire Me</a></li>
            <li><a href="/">Contacts</a></li>
          </ul>
      </nav>
    </StyledNav>
  )
}
