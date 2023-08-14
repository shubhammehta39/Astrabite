import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { transition } from '@chakra-ui/react';

export default function Card() {
  const [isHovered, setIsHovered] = useState(false);

  const hoverVideo = (e) => {
    const video = e.currentTarget.querySelector('video');
    video.currentTime = 0; // Reset video to start
    video.play();
    setIsHovered(true);
  };

  const hideVideo = (e) => {
    const video = e.currentTarget.querySelector('video');
    video.currentTime = 0;
    video.pause();
    setIsHovered(false);
  };

  return (
    <>
      <ul className="video-list">
        <li className="video-item">
          <a href="#">
            <div className="video" onMouseEnter={hoverVideo} onMouseLeave={hideVideo}>
            <video className="vdo" src="https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/bltbd034f71b4e2675f/64c83ba82d4970661a7bdeb9/OTH-2023-17893-HomePgSeas5Update-HS_MV_v1_600x800_30.webm" loop preload="auto" muted={!isHovered}></video> 
              {/* {isHovered ? null: <img className="video-image" src={logo} alt="Video Thumbnail" style={{zIndex:2}}/>} */}
              <div className="bg blue"></div>
              <div className="name">
                <h2>AP</h2>
                <p>Andhra Pradesh</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}
