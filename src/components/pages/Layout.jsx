import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function layout() {
  return (
    
    <>
        <Navbar />
        <Outlet />

       <Footer />
    </>
  )
}

export default layout