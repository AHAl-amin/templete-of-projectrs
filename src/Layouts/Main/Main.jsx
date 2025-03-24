import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navber from '../../assets/Pages/Navber/Navber'
import Footer from '../../assets/Pages/Footer/Footer'

function Main() {

  const Location = useLocation();
  const hideNavberAndFooter =Location.pathname === "/login" || Location.pathname === "/signup";
  return (
    <div>
       {!hideNavberAndFooter && <Navber></Navber>} 
        <Outlet></Outlet>
       
        {!hideNavberAndFooter && <Footer></Footer>} 
    </div>
  )
}

export default Main