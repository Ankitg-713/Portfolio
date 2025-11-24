import React from 'react'
import { useRef, useEffect } from "react";
import homeVideo from "../../assets/homevideo3.mp4";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.playbackRate = 1.75;
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed, trying to play:', error);
        video.play().catch(err => {
          console.log('Video play failed:', err);
        });
      }
    };

    const handleLoadedData = () => {
      playVideo();
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', handleLoadedData);
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div className='h-full w-full'>
      <video
        ref={videoRef}
        src={homeVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Video
