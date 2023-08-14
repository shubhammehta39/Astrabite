import React from "react";
import background from "../assets/Apexworld.png";
import character from "../assets/Character.png";
import Button from "../assets/Buttons.jpg";
const Services = () => {
  return (
    <div>
      <div
        className="hi"
        style={{
          backgroundImage: `url(${background}) `,
          height: "full",
          width: "90%",
          marginLeft: "5%",
          backgroundRepeat:'no-repeat'
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundImage: `url(${character})  `,
              height: "70vh",
              width: "20%",
              backgroundRepeat:'no-repeat'
            }}
          >
          </div>
          <div style={{ display: "flex", flexDirection: "column" , padding:'10%' , gap:'15%', color:'white'}}>
            <div>
              <h1 class="font-bold text-5xl">Service 1</h1>
            </div>
            <div>
              <p>
                PC via Origin and Steam PC via Origin and SteamPC via Origin and
                SteamPC via Origin and SteamPC via Origin and Steam.
              </p>
            </div>
            <div style={{
              backgroundImage: `url(${Button}) `,
              height: "7.5vh",
              width: "33%",
              backgroundRepeat:'no-repeat'
            }}
           >

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
