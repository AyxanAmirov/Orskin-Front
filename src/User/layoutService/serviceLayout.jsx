import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { services } from '../../data/data'
import ServiceNavbar from './ServiceNavbar'
import ServiceFooter from './ServiceFooter'
import { ServiceContext } from '../../context/ServiceContext'
import Loader from '../components/loader'

function ServiceLayout() {
  const loaction = useLocation()
  const [service, setService] = useState(null)

  const pathName = loaction.pathname.split("/")

  useEffect(() => {
    let foundServ = services.find(service => service.title.toLowerCase() === (pathName[3] || pathName[2]))
    setService(foundServ)
  }, [loaction.pathname])

  if (!service) {
    return <Loader />
  }

  return (
    <>
      <ServiceNavbar {...service} />
      <ServiceContext.Provider value={service} >
        <Outlet />
      </ServiceContext.Provider>
      <ServiceFooter />
    </>
  )
}

export default ServiceLayout