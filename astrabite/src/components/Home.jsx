import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="mt-12 px-5 sm:px-10">
        <h3 className="text-5xl font-bold px-9  ">About US</h3>

        <div className="flex flex-col sm:flex-row p-5 sm:p-10 pl-0">
          <div className="w-full sm:w-1/2">
            <p className="pt-5 sm:pt-10 pb-10 font-bold font-stretch">
              Welcome to Astrabite Gaming & Design Studios where imagination
              comes to life through stunning visual effects and captivating
              gaming experiences. With a passionate team of creative
              professionals and cutting-edge technology, we deliver immersive
              worlds for film, television, and advertising. Our state-of-the-art
              facilities and commitment to excellence ensure exceptional results
              that exceed expectations. From breathtaking VFX to unforgettable
              gaming adventures, join us on an incredible journey where
              possibilities are limitless. Contact us today and let's bring your
              visions to life!
            </p>
          </div>

          <div class="basis-1/2 place-self-center" style={{marginLeft:'160px'}}>
           
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <img
                className="mb-5 sm:mb-10"
                src="/src/assets/images.png"
                alt="wc"
                style={{ height: "280px", width: "240px", marginLeft: "30px" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
