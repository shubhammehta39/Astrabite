import React from 'react';
import { Box, Typography, CircularProgress } from "@mui/material";

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
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 8,
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CircularProgress size={64} color="error" />
        <Typography variant="h5" component="h1" align="center" mt={2} style={{color:'black' , paddingTop:'10px', paddingBottom:'10px'}}>
          Maintenance in Progress
        </Typography>
        <Typography variant="body1" align="center" mt={2} style={{color:'black' , paddingBottom:'10px'}}>
          We apologize for the inconvenience. The website is currently
          undergoing maintenance. Please check back later.
        </Typography>
      </Box>
    </Box>
    </div>
  )
}

export default MaintainancePg