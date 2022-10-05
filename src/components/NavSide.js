import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble, FaPinterestP} from 'react-icons/fa'
import { StyledAside } from './style/StyledSideNav'

export default function NavSide() {
  return (
    <StyledAside>
        <div className="side-wrapper">
            <div className="side-wrapper-logo">
                <img src='img/logo-01.jpg' alt='logo' />
            </div>
            <ul className="side-wrapper-social">
                <a href='/'><FaFacebook /></a>
                <a href='/'><FaTwitter /></a>
                <a href='/'><FaLinkedinIn /></a>
                <a href='/'><FaInstagram /></a>
                <a href='/'><FaDribbble /></a>
                <a href='/'><FaPinterestP /></a>
            </ul>
        </div>
    </StyledAside>
  )
}
