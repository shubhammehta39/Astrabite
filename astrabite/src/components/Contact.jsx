import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid, IconButton, Typography, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { FormControl } from '@mui/base';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
export default function Contact() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  //const [phone,setPhone]=useState("9999999999");
  const [message,setMessage]=useState("");
  const [error,setError]=useState("");

  const check=()=>{

      if(name=="")
      {
        setError("*Name is required");
      }
      else if(email=="")
      {
        setError("*Email is required");
      }
      else if(message=="")
      {
        setError("*Message is required");
      }
      
      else
      {
        setError("");
        submit();
      }
  }
  const submit = () => {
    //const FormData = require('form-data');
    //let ph="+91"+phone;
    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    //data.append('phone', ph);
    data.append('message', message);
    
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://astrabyte.pythonanywhere.com/contactus/',
      data : data
    };
    
    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log((response.data));
        setEmail("");
        setName("");
        setMessage("");
      }
      catch (error) {
        //console.log(error);
      }
    }
    
    makeRequest();
    

  }
  return (
    <>
    <div style={{backgroundColor:"", paddingBottom:'20px',paddingTop:"20px"}}>
      <FormControl>
      <Grid container rowSpacing={3} sx={{backgroundColor:""}}>
        <Grid item md={5} sm={12} xs={12} sx={{ paddingTop: "20px",backgroundColor:"2b2c2c" }}>
          <Grid container>
            <Grid item md={3} sm={1} xs={1}></Grid>
            <Grid item md={8} sm={10} xs={10} >
              <Typography variant='h5' sx={{  fontSize: "40px", fontWeight: "1000",color:"white"}}>
                Contact Information
              </Typography>
              <Typography variant='h5' sx={{  fontSize: "20px", fontWeight: "100",color:"white",paddingTop:"10px" }}>
                Any questions or remarks...
              </Typography>
              <Typography variant="h5" sx={{  fontSize: "20px" ,color:"white"}}>
                Just write us a message!!
              </Typography>
            </Grid>
            <Grid item md={1} sm={1} xs={1}></Grid>
            <Grid item md={3} sm={1} xs={1}></Grid>
            <Grid item md={8} sm={10} xs={10} sx={{ padding: "40px", paddingLeft: "0px" ,paddingTop:"100px"}}>
              <IconButton>
                <EmailIcon sx={{ color: "blue" }}></EmailIcon>
              </IconButton>
              <div style={{ display: "inline", fontStyle: "bold", fontSize: "19px", fontWeight: "800",color:"white" }}>
                hr@astrabite.com
              </div>
              <div>
                <IconButton>
                  <LocationOnIcon sx={{ color: "blue" }}></LocationOnIcon>
                </IconButton>
                <a href="https://goo.gl/maps/hfN21Ekrruinavqz7" target="_blank">
                <div style={{ display: "inline", fontSize: "19px", fontWeight: "800",color:"white", paddingBottom : "50px" }}>
                  Andheri west
                </div>
                </a>
              </div>
              <div>
              </div>

            </Grid>
            <Grid item md={1} sm={1} xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid item md={7} sx={{justifyContent:"center",display:'flex',alignItems:"center"}}>
            <div class="bg-gray-200 " style={{padding:"40px",width:"60%",borderRadius:20}}>
          <Grid container >
            <Grid item md={12} className='contactus' >
              <Grid container>
                <Grid item md={12} sm={12} xs={12} sx={{ paddingTop: "20px" }}>
                  <TextField value={name} onChange={(e)=>{setName(e.target.value)}} required id="standard-basic" variant="outlined" placeholder="Your name" sx={{ width: "100%" }} />
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{ paddingTop: "20px" }}>
                  <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} required id="standard-basic" variant="outlined" placeholder="Email" sx={{ width: "100%" }} />
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{ paddingTop: "20px" }}>
                  <TextField rows={4} multiline  value={message} onChange={(e)=>{setMessage(e.target.value)}} required id="standard-basic" variant="outlined" placeholder="Message" sx={{ width: "100%" }} />
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{ paddingTop: "20px" ,justifyContent:"end",display:"flex",alignItems:"end"}}>
                <div style={{color:"red"}}>{error}</div>
                </Grid>
                <Grid item md={12}  sm={12} xs={12} sx={{ paddingTop: "10px" ,justifyContent:"end",display:"flex",alignItems:"end"}}>
                  
                  <Button onClick={check} sx={{ backgroundColor: "blue", color: "white",fontWeight :"bold ", borderRadius: 10, padding: "5px", width: "30%", "&:hover": { backgroundColor: "blue", color: "white", borderRadius: 20, padding: "5px", width: "30%" } }}>
                    Send
                  </Button>
                  
                </Grid>
              </Grid>

            </Grid>
          </Grid>
          </div>
        </Grid>
      </Grid>
      </FormControl>
      </div>

    </>
  )
}