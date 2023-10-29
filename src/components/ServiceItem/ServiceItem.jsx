import React from 'react'
import './ServiceItem.css'

const ServiceItem = ({imgURL, title, desc}) => {
  return (
    <div className='app__service-item'>
        <div className='service-item_image'>
            <img src={imgURL} alt={title} />
        </div>
        <h3>{title}</h3>
        <p className='description' style={{textAlign:'center'}}>{desc}</p>
    </div>
  )
}

export default ServiceItem
