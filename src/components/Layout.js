import React from 'react'
import Nav from './Nav'
import NavSide from './NavSide'
import Hero from './Hero'
import { GlobalStyles } from './style/Global'
import { graphql, useStaticQuery } from 'gatsby'
import Work from './Work'
import About from './About'
import Services from './Services'
import Skills from './Skills'

export default function Layout() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const {title} = data.site.siteMetadata

  console.log("This is the "+ title + " website!")

  return (
    <div style={{display:'flex'}}>
        <GlobalStyles />
        <NavSide />
        <main style={{flex:1}}>
          {/* <h1>{title}</h1> */}
          <Nav />
          <Hero />
          <Work />
          <About />
          <Services />
          <Skills />
        </main>
    </div>
  )
}
