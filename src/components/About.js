import React from 'react'
import { StyledAbout } from './style/StyledAbout'

export default function About() {
  return (
    <StyledAbout>
        <div className="about-image">
            <img src='img/content-img-02.jpg' />
        </div>
        <div className="about-content">
            <h2>About me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eum enim? Facilis temporibus atque fugit id fuga vitae nulla minima deserunt molestias ipsam. Laborum eveniet maxime similique dolorum animi? Possimus, nihil quibusdam minus illum quisquam nostrum sed beatae quaerat quidem!</p>
            <a>Read more</a>
        </div>
    </StyledAbout>
  )
}
