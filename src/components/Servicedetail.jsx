import { Grid } from '@mui/material'
import React from 'react'
import '../styles/servicedetail.css'
import Apex from '../assets/Apexworld.png'
import Buttons from '../assets/Buttons.jpg'
export default function Servicedetail() {
  return (
    <>
        <Grid container sx={{padding:"70px",backgroundColor:"#131757"}}>
            <Grid item md={12} >
                <img src={Apex} className='bgimage'/>
                <img src={Buttons} className='btn'/>
            </Grid>
        </Grid>
    </>
  )
}
