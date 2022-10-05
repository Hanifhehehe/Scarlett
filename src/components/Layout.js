import React from 'react'
import Nav from './Nav'
import SideNav from './SideNav'
import { GlobalStyles } from './style/Global'

export default function Layout() {
  return (
    <>
        <GlobalStyles />
        <SideNav />
        <main>
            <Nav />
        </main>
    </>
  )
}
