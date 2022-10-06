import React from 'react'
import Nav from './Nav'
import NavSide from './NavSide'
import Hero from './Hero'
import { GlobalStyles } from './style/Global'

export default function Layout() {
  return (
    <div style={{display:'flex'}}>
        <GlobalStyles />
        <NavSide />
        <main style={{flex:1}}>
          <Nav />
          <Hero />
        </main>
    </div>
  )
}
