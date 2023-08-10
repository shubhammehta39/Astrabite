import React from 'react'
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <>
    <div style={{position:"sticky",zIndex:"5  ",top:0,backgroundColor:"",paddingTop:"0px"}}>
      <header class="w-full h-16 flex justify-center  " >
        <nav class="w-4/5 flex justify-between items-center font-bebas">
          <h1 class="text-3xl text-color-black"><img src={logo} alt=""/></h1>
          <ul class="md:flex gap-x-5 text-xl hidden">
              <li class="cursor-pointer">
                <div >About Us</div>
              </li>
              <li class="cursor-pointer">
                <div >Team</div>
              </li>
              <li class="cursor-pointer">
                <div >Services</div>
              </li>
              <li class="cursor-pointer">
                <div >Contact Us </div>
              </li>
          </ul>
        </nav>
      </header>
    </div>
    </>
  )
}
