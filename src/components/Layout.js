import React from 'react'
import Nav from './Nav'
import NavSide from './NavSide'
import { GlobalStyles } from './style/Global'

export default function Layout() {
  return (
    <div style={{display:'flex'}}>
        <GlobalStyles />
        <NavSide />
        <main style={{flex:1}}>
            <Nav />
        </main>
    </div>
  )
}
