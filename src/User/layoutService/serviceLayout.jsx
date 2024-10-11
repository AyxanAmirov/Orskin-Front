import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { services } from '../../data/data'
import ServiceNavbar from './ServiceNavbar'
import ServiceFooter from './ServiceFooter'
import { ServiceContext } from '../../context/ServiceContext'

function ServiceLayout() {
  const loaction = useLocation()
  const [service, setService] = useState({
    moreinfo: {
      image: "",
      description: ""
    }
  })
  const pathName = loaction.pathname.slice(loaction.pathname.lastIndexOf("/") + 1)

  useEffect(() => {
    let foundServ = services.find(service => service.title.toLowerCase() === pathName)
    setService(foundServ)
  }, [loaction.pathname])


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