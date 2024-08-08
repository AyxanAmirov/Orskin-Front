import React from 'react'
import { Outlet } from 'react-router-dom'
import ServiceNavbar from './ServiceNavbar'
import ServiceFooter from './ServiceFooter'

function ServiceLayout() {
  return (
    <>
       <ServiceNavbar/>
       <Outlet/>
       <ServiceFooter/>
    </>
  )
}

export default ServiceLayout
