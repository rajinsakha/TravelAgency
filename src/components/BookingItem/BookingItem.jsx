import React from 'react';
import './BookingItem.css';

const BookingItem = ({icon: Icon, title, desc, color}) => {
    const iconsize = '24px';
  return (
    <div className='app__bookingItem' >
        <div className='bookingItem_image' style={{backgroundColor:color}}>
                <Icon size={iconsize}/>
        </div>

        <div className="bookingItem_info">
            <h4 className='subheading'>{title}</h4>
            <p className='description' style={{marginTop:'0.5rem'}}>{desc}</p>
        </div>


    </div>
  )
}

export default BookingItem
