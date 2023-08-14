import { Grid } from '@mui/material'
import React from 'react'
import '../styles/servicedetail.css'
import Apex from '../assets/Apexworld.png'
import Buttons from '../assets/Buttons.jpg'
import video from "../assets/video.mp4";

export default function Servicedetail() {
  return (
    <>
        <Grid container sx={{padding:"70px",backgroundColor:"#131757"}}>
            <Grid item md={12} >
                {/* <img src={Apex} className='bgimage'/> */}
                {/* <video autoplay loop playsinline>
                  <source type="video/web" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"></source>
                  
                </video> */}

<video autoPlay loop muted >
        <source src={video} type="video/mp4" />
      </video>
            </Grid>
           
        </Grid>
    </>
  )
}
