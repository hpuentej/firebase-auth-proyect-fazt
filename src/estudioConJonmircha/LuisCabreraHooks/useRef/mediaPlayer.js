import { useState, useRef } from "react";

export const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {    
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play()
    setIsPlaying(!isPlaying)
  };

  return (
    <>
      <video onClick={handleVideo} width="400" ref={videoRef}>
        <source src="videos/Cheetah.mp4" type="video/mp4" />
      </video>
      <button onClick={handleVideo}>Play</button>
    </>
  );
};


