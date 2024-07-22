import React from 'react'
import { Link } from 'react-router-dom'
import ElectricRangeModels from './ElectricRangeModels'

function ElectricRange({cars}) {
  return (
    <div>
    <img src="https://www.bmw.fr/content/dam/bmw/marketFR/bmw_fr/topics/univers/header-BEV-range.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1707489722261.jpg" width="100%" alt="" className="ElceeticRAngeImgBig" />
    <p className="FirstElceeticRAngePBig">100% ELECTRIC.</p>
    <p className="SecElceeticRAngePBig">100% DRIVING PLEASURE.100 BMW</p>
    <p className='ToMuchTalksInElectricRange'>
    Discover the 100% electric BMW range and enjoy an exhilarating driving experience aboard the BMW iX1, the New BMW iX2, the BMW iX3, the BMW i4, the New BMW i5 or the BMW iX. Whether it's an SUV or a sedan, choose the electric BMW that suits you and benefit from one year of unlimited charging on the IONITY network. Go electric, while enjoying the pure pleasure of driving BMW.</p>
    <div className="AllElectricNavButtons">
    <Link to="/" ><button className='ElectricNavButtons' >Discover electric vehicles</button></Link>
    <Link to="/" ><button className='ElectricNavButtons'>The IONITY offer</button></Link>
    <Link to="/" ><button className='ElectricNavButtons'>Electromobility by BMW</button></Link>
    <Link to="/" ><button className='ElectricNavButtons'>My BMW App</button></Link>
    </div>
    <p className="SecondTitleInElectricRange">CHOOSE YOUR 100% ELECTRIC BMW.</p>
    <div className="">
        <ElectricRangeModels cars={cars}/>
    </div>
    </div>
  )
}

export default ElectricRange
