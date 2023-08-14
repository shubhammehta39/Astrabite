import React from "react";
import background from "../assets/Apexworld.png";
import video from "../assets/video.mp4";
import character from "../assets/Character.png";
import Button from "../assets/Buttons.jpg";
const Services = () => {
  return (
    <div>
      <div className="main-container">
        {/* Video Container */}
        {/* <div className="video-cont"> */}
          <video autoPlay loop muted className="video-container">
            {/* <source
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
            type="video/webm"
          /> */}
            <source src={video} type="video/mp4" />
          </video>
          <div className="overlay">
            {/* <div className="content">SKF Presents</div> */}

            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundImage: `url(${character})  `,
                  height: "70vh",
                  width: "20%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10%",
                  gap: "15%",
                  color: "black",
                }}
              >
                <div>
                  <h1 class="font-bold text-5xl">Service 1</h1>
                </div>
                <div>
                  <p>
                    PC via Origin and Steam PC via Origin and SteamPC via Origin
                    and SteamPC via Origin and SteamPC via Origin and Steam.
                  </p>
                </div>
                <div
                  style={{
                    //   backgroundImage: `url(${Button}) `,
                    height: "7.5vh",
                    width: "30rem",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img src={Button} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Services;
