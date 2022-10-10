import React from 'react'
import { useState } from 'react'
import NavHamburger from './NavHamburger'
import { StyledNav } from './style/StyledNav'

export default function Nav() {
  const [isActive, setIsActive] = useState(false)

  return (
    <StyledNav>
      {/* <nav style={isActive ? {left:'55%'} : {right:'-30rem'}}> */}
      <nav className={isActive ? 'active' : null}>
        <div className="nav-hamburger" onClick={() => setIsActive(!isActive)}>
          <NavHamburger />
        </div>
          <ul>
            <li className={isActive ? 'fade-in' : null} ><a href="#hero">Home</a></li>
            <li className={isActive ? 'fade-in' : null} ><a href="#about">About</a></li>
            <li className={isActive ? 'fade-in' : null} ><a href="/">Projects</a></li>
            <li className={isActive ? 'fade-in' : null} ><a href="/">Services</a></li>
            <li className={isActive ? 'fade-in' : null} ><a href="/">Hire Me</a></li>
            <li className={isActive ? 'fade-in' : null} ><a href="/">Contacts</a></li>
          </ul>
      </nav>
    </StyledNav>
  )
}
