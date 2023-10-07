import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Pages/shared/Navber'

const Root = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  )
}

export default Root
