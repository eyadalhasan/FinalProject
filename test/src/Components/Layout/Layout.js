import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Layout() {
  return (
    <React.Fragment>
      <Navbar>

      </Navbar>
      <Outlet></Outlet>
    </React.Fragment>
  )
}

export default Layout