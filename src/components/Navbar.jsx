import React from 'react'
import logo from '../assets/logo.png'
import logon from '../assets/logon.png'
export default function Navbar() {
  return (
    <>
    <div style={{position:"sticky",zIndex:"5  ",top:0,backgroundColor:"",paddingTop:"0px"}}>
      <header class="w-full h-16 flex justify-center  " >
        <nav class="w-4/5 flex justify-between items-center font-bebas">
          <h1 class="text-3xl text-color-black"><img src={logon} alt="" style={{}}/></h1>
          <ul class="md:flex gap-x-5 text-xl hidden">
              <li class="cursor-pointer">
                <div >About Us</div>
              </li>
              <li class="cursor-pointer">
                <div >3D Printing</div>
              </li>
              <li class="cursor-pointer">
                <div >Gaming</div>
              </li>
              <li class="cursor-pointer">
                <div >Studios</div>
              </li>
          </ul>
        </nav>
      </header>
    </div>
    </>
  )
}
