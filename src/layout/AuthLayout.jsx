import React from 'react'
import AuthNavbar from '../components/navbar/AuthNavbar'
import { Outlet } from 'react-router'

export default function () {
  return (
    <div>
        <AuthNavbar/>
        <Outlet/>
    </div>
  )
}
