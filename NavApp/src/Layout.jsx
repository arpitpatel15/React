import React from 'react'
import Header from './componants/Header/Header'
import Footer from './componants/Footer/Footer'
import Home from './componants/Home/Home'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
