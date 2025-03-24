import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../../assets/Pages/Navber/Navber'
import Footer from '../../assets/Pages/Footer/Footer'

function Main() {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main