import React from "react";
import "./final.css";

const Final = () => {
  return (
    <div className="hi">
      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        <div>
          <div className="container">
            <div className="background-image"></div>
            <div className="content">
              <div className="image-div">
                <img src="../src/assets/char.png" alt="Content"  style={{ width: '80%', height: 'auto' }} />
              </div>
              {/* <div className="image-div ">
            <img src="../src/assets/banner.png" alt="Content" />
          </div> */}
              <div className="text-div">
                <h1 class="text-7xl font-bold font-stretch-10px text-center align-center justify-center">
                  Gaming 
                </h1>
                <p>
                  Your text description goes here.
                  <br />
                  Your text description goes here. <br />
                  Your text description goes here.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="background-image"></div>
            <div className="content">
            <div className="text-div">
                <h1 class="text-7xl font-bold font-stretch-10px text-center align-center justify-center">
                  3D Printing
                </h1>
                <p>
                  Your text description goes here.
                  <br />
                  Your text description goes here. <br />
                  Your text description goes here.
                </p>
              </div>
              <div className="image-div">
                <img src="../src/assets/3dprinter.png" alt="Content" />
              </div>
              {/* <div className="image-div ">
            <img src="../src/assets/banner.png" alt="Content" />
          </div> */}
             
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="background-image"></div>
            <div className="content">
              <div className="image-div">
                <img src="../src/assets/char.png" alt="Content"  style={{ width: '80%', height: 'auto' }}/>
              </div>
              {/* <div className="image-div ">
            <img src="../src/assets/banner.png" alt="Content" />
          </div> */}
              <div className="text-div">
                <h1 class="text-7xl font-bold font-stretch-10px text-center align-center justify-center">
                  Studios
                </h1>
                <p>
                  Your text description goes here.
                  <br />
                  Your text description goes here. <br />
                  Your text description goes here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
