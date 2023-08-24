import React from 'react';
import { Box, Typography, CircularProgress } from "@mui/material";
import './shi.css';
import astraunot from '../assets/Wave white.mp4';


const MaintainancePg = () => {
  return (
    <div>
         <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
        
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 8,
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }
      } /> */}

        <div className="animation" style={{zIndex:'999'}}>
        <div className="one spin-one"></div>
        <div className="two spin-two"></div>
        <div className="three spin-one"></div>
       </div>
      
        {/* <CircularProgress size={64} color="error" /> */}
        <Typography variant="h5" component="h1" align="center" mt={2} style={{color:'black' , paddingTop:'10px', paddingBottom:'10px',zIndex:'999'}}>
          Maintenance in Progress
        </Typography>
        <Typography variant="body1" align="center" mt={2} style={{color:'black' , paddingBottom:'10px', width:'380px',zIndex:'999'}}>
          We apologize for the inconvenience. The website is currently
          undergoing maintenance. Please check back later.
        </Typography>
       <div>
       <video autoPlay loop muted className="video" mt={2} style={{position:"absolute",left:0,bottom:0}}>
                  <source src={astraunot} type="video/mp4" />
                </video>
       </div>
      </Box>


    {/* </Box> */}
    </div>
  )
}

export default MaintainancePg