import React from "react";
import "./services.css"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AnimationIcon from '@mui/icons-material/Animation';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const Services = () => {
  return (
    <div>
      <div>
        <div class=" mx-auto py-20 lg:px-12 sm:px-5">
          <h3 class="pb-20 font-bold text-5xl">Our Services</h3>

          <div style={{display:'flex'}}>

          
          <div class="container">
            <div class="box r items-center ">
              <div class="items-center content-center">
                <div>

               <AutoFixHighIcon sx={{ fontSize: 60,margin:3}}/>
                </div>
              <span class="title text-center font-bold text-align-center justify-content-center  ">VFX</span>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="box r items-center ">
              <div class="items-center content-center">
                <div>

                <VideogameAssetIcon sx={{ fontSize: 60,margin:3, marginLeft:6}}/>
                </div>
              <span class="title text-center font-bold text-align-center justify-content-center" style={{paddingLeft:'2px'}}>Game Dev</span> 
              

              </div>
            </div>
          </div>

          <div class="container">
            <div class="box r items-center ">
              <div class="items-center content-center">
                <div>
<ViewInArIcon sx={{ fontSize: 60,margin:2, marginLeft:6}}/>
                </div>
              <span class="title text-center font-bold align-center justify--center " style={{paddingLeft:45}}>3-D <br />Modelling</span>

              </div>
            </div>
          </div>

          <div class="container">
            <div class="box r items-center ">
              <div class="items-center content-center">
                <div>
                  <AnimationIcon sx={{ fontSize: 60,margin:3, marginLeft:8}}/>
                </div>
              <span class="title text-center font-bold text-align-center justify-content-center">Animations</span>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="box r items-center ">
              <div class="items-center content-center">
                <div>
                  <DesignServicesIcon  sx={{ fontSize: 60,margin:2, marginLeft:6}}/>
                </div>
              <span class="title text-center font-bold text-align-center justify-content-center">Graphic <br />Designing</span>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;