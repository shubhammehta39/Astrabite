import React from 'react'
import logo from '../assets/logo.png'
import logon from '../assets/logon.png'
export default function Navbar() {
  const styles={
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    background: "rgba(231, 227, 227, 0.35)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(6.5px)",
    webkitBackdropFilter: "blur(11px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    zIndex: 999,
  }
  return (
    
    <>
    <div style={styles}>
      <header class="w-full h-16 flex justify-center  " >
        <nav class="w-4/5 flex justify-between items-center font-bebas">
          <h1 class="text-3xl text-color-black"><img src={logon} alt="" style={{width:"50px"}}/></h1>
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
