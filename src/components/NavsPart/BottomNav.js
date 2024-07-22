import React from 'react'
import { Link } from 'react-router-dom'
import '../../style.css'

function BottomNav() {
  
  return (
    <>
    <div className='FirstSectioBfrBottomNav'>
    FIND YOUR BMW

<Link to="/Models">
  <p className="FirstSectioBfrBottomNavP">All Models</p>
</Link>
    </div>
      <div className='bigDivOne'>
        <div className="bottomNav">
          <div className="BottomOne">
            <p className="">BMW GROUP</p>
            <Link to="" className='linkto'>BMW Group</Link>
            <Link to="" className='linkto'>  BMW.com/en</Link>
            <Link to="" className='linkto'>BMW Finance</Link>
            <Link to="" className='linkto'>BMW Motorrad</Link>
            <Link to="" className='linkto'>MINI</Link>
            <Link to="" className='linkto'>FAQ</Link>
          </div>
          <div className="BottomOne">
            <p className="">BMW France</p>
            <Link to="" className='linkto'>Careers</Link>
            <Link to="" className='linkto'>Executive Committee</Link>
            <Link to="" className='linkto'>BMW Group training courses</Link>
            <Link to="" className='linkto'>BMW Excellence Club</Link>
            <Link to="" className='linkto'>Friends of the brand</Link>
            <Link to="" className='linkto'>Recycling at BMW</Link>
            <Link to="" className='linkto'>ISO 9001 certification</Link>
          </div>
          <div className="BottomOne">
            <p className="">RANGE</p>
            <Link to="" className='linkto'>Presentation of the range</Link>
            <Link to="" className='linkto'>Compact</Link>
            <Link to="" className='linkto'>Sedan</Link>
            <Link to="" className='linkto'>Break</Link>
            <Link to="" className='linkto'>Cut</Link>
            <Link to="" className='linkto'>Convertible</Link>
            <Link to="" className='linkto'>SUV</Link>
            <Link to="" className='linkto'>Compact SUV</Link>
          </div>
          <div className="BottomOne">
            <Link to="" className='linkto'>Crossover</Link>
            <Link to="" className='linkto'>BMW M</Link>
            <Link to="" className='linkto'>Luxury</Link>
            <Link to="" className='linkto'>Electric</Link>
            <Link to="" className='linkto'>Plug-in Hybrid</Link>
            <Link to="" className='linkto'>Concept Cars</Link>
            <Link to="" className='linkto'>BMW Technologies</Link>
            <Link to="" className='linkto'>BMW Individual</Link>
            <Link to="" className='linkto'>BMW Classic</Link>
          </div>
        </div>
        <div className="Part2NAav">
          <p className="Follow">Follow us</p>
          <img src="./photos/facebook.png" alt="" height="25px" width="25px" className="socialMedia" />
          <img src="./photos/instagram.png" alt="" height="25px" width="25px" className="socialMedia" />
          <img src="./photos/youtube.png" alt="" height="25px" width="25px" className="socialMedia" />
          <img src="./photos/linkedin.png" alt="" height="25px" width="25px" className="socialMedia" />
        </div>
      </div>
      <div className='bigDivTow'>
      <p className='tagBottom'>© BMW France 2024</p>
<div className="LAstDivBottomNav">
  <Link to="" className='linkto' id='linkto'>Contact</Link>
  <Link to="" className="linkto" id='linkto'>Newsletter</Link>
  <Link to="" className="linkto" id='linkto'>Cookies</Link>
  <Link to="" className="linkto" id='linkto'>Legal Notice</Link>
  <Link to="" className="linkto" id='linkto'>Consumption and emissions</Link>
  <Link to="" className="linkto" id='linkto'>Data protection</Link>
  <Link to="" className="linkto" id='linkto'>Digital Services Regulation</Link>
</div>
      </div>
      <fotter>
        <p>Copyright © 2024 Azer Jradi. All rights reserved.</p>
      </fotter>
    </>
  )
}

export default BottomNav
