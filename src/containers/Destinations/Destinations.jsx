import React from 'react'
import { destinations } from '../../constants'
import { DestinationItem } from '../../components'
import './Destinations.css'

const Destinations = () => {
  return (
    <main className='section__padding'>
    <p className='tagline' style={{textAlign:'center'}}>Top Selling</p>
    <h1 className='title'>Top Destination</h1>
    <div className='app__destinations'>
  
      {destinations.map((service)=>(
        <DestinationItem key={service.title} {...service} />
      ))}
  
    </div>
    </main>
  )
}

export default Destinations
