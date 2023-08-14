// import React from 'react'
import "../styles/service2.css";

// const Service2 = () => {
//   return (
//     <div>
//       <section class="outter option1">
// <section class="video-container">
//   <video src="https://fugamma.co/wp-content/uploads/2018/02/8863081.mp4" autoplay loop playsinline muted></video>
//   <div class="callout">
//     <h1>Hi, I'm Bosco</h1>
//     <div class="desc">They say every wrinkle is worth a thousand cuddles.  I just need a home and loving family to prove it.</div>
//     <div class="button"><div class="inner">Take Me Home!</div></div>
//   </div>

// </section>
// </section>

// <section class="outter option2">
// <section class="video-container">
//   <video src="http://fugammadev.com/PAWS/wp-content/uploads/2018/02/8863081.mp4" autoplay loop playsinline muted></video>
//   <div class="callout">
//     <h1>Hi, I'm Bosco</h1>
//     <div class="desc">They say every wrinkle is worth a thousand cuddles.  I just need a home and loving family to prove it.</div>
//     <div class="button"><div class="inner">Take Me Home!</div></div>
//   </div>

// </section>
// </section>
//     </div>
//   )
// }

// export default Service2
import React from "react";
// import "./VideoBackground.css"; // Import your CSS file
import character from "../assets/Character.png"; // Import your image
import video from "../assets/video.mp4";
import Button from "../assets/Buttons.jpg";

const Services = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video1">
        <source src={video} type="video/mp4" />
      </video>

      {/* Image Overlay */}
      <div className="image-overlay">
        <div style={{ display: "flex" }}>
          <div>
            <img src={character} alt="Character" />
          </div>
          <div>
            <div style={{ color: "white" }}>
              <h1 class="font-bold text-5xl">Service 1</h1>
            </div>
            <div>
              <p style={{ color: "white" }}>
                PC via Origin and Steam PC via Origin and SteamPC via Origin and
                SteamPC via Origin and SteamPC via Origin and Steam.
              </p>
            </div>
            <div>
              <img src={Button} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Text and Button Section */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Services;
