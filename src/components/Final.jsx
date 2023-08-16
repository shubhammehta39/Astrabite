import React from "react";
import "./final.css";

const Final = () => {
  return (
    <div className="hi">
      <div className="container">
        <div className="background-image"></div>
        <div className="content">
          <div className="image-div">
            <img src="../src/assets/char.png" alt="Content" />
          </div>
          <div className="image-div ">
            <img src="../src/assets/banner.png" alt="Content" />
          </div>
          {/* <div className="text-div">
           <p>Your text description goes here.
            <br />Your text description goes here. <br />Your text description goes here.
          </p> 
          <h1 class="text-9xl font-bold font-stretch-10px text-center align-center justify-center">Astrabite</h1>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Final;
