import React from 'react'
import { useState } from 'react'
import NavHamburger from './NavHamburger'
import { StyledNav } from './style/StyledNav'

export default function Nav() {
  const [isActive, setIsActive] = useState(false)

  return (
    <StyledNav>
      {/* <nav style={isActive ? {left:'55%'} : {right:'-30rem'}}> */}
      <nav className={isActive && 'active'}>
        <div className="nav-hamburger" onClick={() => setIsActive(!isActive)}>
          <NavHamburger />
        </div>
          <ul>
            <li className={isActive && 'fade-in'} ><a href="/">Home</a></li>
            <li className={isActive && 'fade-in'} ><a href="/">About</a></li>
            <li className={isActive && 'fade-in'} ><a href="/">Projects</a></li>
            <li className={isActive && 'fade-in'} ><a href="/">Services</a></li>
            <li className={isActive && 'fade-in'} ><a href="/">Hire Me</a></li>
            <li className={isActive && 'fade-in'} ><a href="/">Contacts</a></li>
          </ul>
      </nav>
    </StyledNav>
  )
}
