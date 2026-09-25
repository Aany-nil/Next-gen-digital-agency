import React from 'react'
import { Outlet } from 'react-router-dom';
import Navber from './Navber';

const Layout = () => {
  return (
    <>
      <Navber />
      <Outlet />
    </>
  )
}

export default Layout;
