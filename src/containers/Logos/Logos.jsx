import React from 'react'
import { axon, alitalia, qantas, jetstar, expedia } from '../../assets'
import './Logos.css';

const Logos = () => {
  return (
    <div className='section__padding app__logos'>
        <img src={axon} alt="axon" />
        <img src={jetstar} alt="jetstar" />
        <img src={expedia} alt="expedia" />
        <img src={qantas} alt="qantas" style={{width:'162px', height:'32px'}} />
        <img src={alitalia} alt="alitalia" style={{width:'102px', height:'32px'}} />
    </div>
  )
}

export default Logos
