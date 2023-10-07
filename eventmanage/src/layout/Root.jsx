import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Pages/shared/Navber'
import Footer from '../Pages/Home/footer/Footer'

const Root = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
