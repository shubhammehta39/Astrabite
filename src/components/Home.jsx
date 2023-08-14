import { Grid } from '@mui/material'
import React from 'react'
import logo1 from '../assets/logo1.png'
import astraunot from '../assets/astraunot.mp4'
export default function Home() {
  return (
    <div style={{height:'100vh'}}>
      <Grid container sx={{backgroundColor:"black" ,height:'100vh' , paddingTop:'1  0%'}}>
        <Grid item md={5} sx={{paddingTop:'10%'}}>
        <video autoPlay loop muted className="video">
                  <source src={astraunot} type="video/mp4" />
                </video>
        </Grid>
        <Grid item md={7} >
            <div style={{paddingLeft:"5%" , }}>
            <img src={logo1} alt='' style={{width:'120%'}}/ >
            </div>
            <div style={{padding:10,color:"white", fontSize:'25px', paddingLeft:'20%'}}>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Recusandae laborum sapiente eveniet <br /> qui aut sint obcaecati molestias atque <br /> beatae id?
            </div> 
        </Grid>
      </Grid>
    </div>
  )
}
