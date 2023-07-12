import React from "react";
import "./services.css";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AnimationIcon from '@mui/icons-material/Animation';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { motion } from "framer-motion"
const Services = () => {
  return (
      <div>
        <div className="mx-auto py-20 lg:px-12 sm:px-5 sm:py-10">
          <h3 className="pb-20 font-bold text-5xl">Our Services</h3>

          <div className="flex flex-wrap justify-center">
            <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:2,scale:1}} viewport={{once:true}} className="container w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className="box r items-center">
                <div className="items-center content-center">
                  <div>
                    <AutoFixHighIcon sx={{ fontSize: 60, margin: 3 }} />
                  </div>
                  <span className="title text-center font-bold text-align-center justify-content-center">
                    VFX
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="container w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className="box r items-center">
                <div className="items-center content-center">
                  <div>
                    <VideogameAssetIcon
                      sx={{ fontSize: 60, margin: 3, marginLeft: 6 }}
                    />
                  </div>
                  <span className="title text-center font-bold text-align-center justify-content-center">
                    Game Dev
                  </span>
                </div>
              </div>
            </div>

            <div className="container w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className="box r items-center">
                <div className="items-center content-center">
                  <div>
                    <ViewInArIcon
                      sx={{ fontSize: 60, margin: 2, marginLeft: 6 }}
                    />
                  </div>
                  <span
                    className="title text-center font-bold align-center justify--center"
                    style={{ paddingLeft: 45 }}
                  >
                    3-D <br /> Modelling
                  </span>
                </div>
              </div>
            </div>

            <div className="container w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className="box r items-center">
                <div className="items-center content-center">
                  <div>
                    <AnimationIcon
                      sx={{ fontSize: 60, margin: 3, marginLeft: 8 }}
                    />
                  </div>
                  <span className="title text-center font-bold text-align-center justify-content-center">
                    Animations
                  </span>
                </div>
              </div>
            </div>

            <div className="container w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
              <div className="box r items-center">
                <div className="items-center content-center">
                  <div>
                    <DesignServicesIcon
                      sx={{ fontSize: 60, margin: 2, marginLeft: 6 }}
                    />
                  </div>
                  <span className="title text-center font-bold text-align-center justify-content-center">
                    Graphic <br /> Designing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Services;
