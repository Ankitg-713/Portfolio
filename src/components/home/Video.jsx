import React from 'react'
import { useRef, useEffect } from "react";
import homeVideo from "../../assets/homevideo3.mp4";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 1.75; // Set speed
  }, []);
  return (
    <div className='h-full w-full'>
      <video
      ref={videoRef}
      src={homeVideo}
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    />
    </div>
  )
}

export default Video
