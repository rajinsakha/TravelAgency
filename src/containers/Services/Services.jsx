import React from 'react'
import { services } from '../../constants'
import { ServiceItem } from '../../components'
import './Services.css'

const Services = () => {
  return (
    <main className='section__padding'>
    <p className='tagline' style={{textAlign:'center'}}>Category</p>
    <h1 className='title' >We Offer Best Services</h1>
    <div className='app__services'>
  
      {services.map((service)=>(
        <ServiceItem key={service.title} {...service} />
      ))}
  
    </div>
    </main>
  )
}

export default Services
