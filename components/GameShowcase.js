"use client"; 

import { useEffect, useState } from 'react';

export default function GameShowcase() {
  const imagesGames = [
    "/Images/ShowCaseImages/Game.png",
    "/Images/ShowCaseImages/SpaceCrash.png",
    "/Images/ShowCaseImages/StartScreen(1).png",
    "/Images/ShowCaseImages/TitelImage.png"
  ];

  const [currentImage, setCurrentImage] = useState(imagesGames[0]);

  useEffect(() => {
    let i = 0;
    
    const interval = setInterval(() => {
      i = (i + 1) % imagesGames.length;
      setCurrentImage(imagesGames[i]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hole64x64" style={{ top: '100%' }}>
      <div 
        className="imageShowCaseGame" 
        style={{ 
          backgroundImage: `url(${currentImage})`,
          top: '0%', 
          left: '0%', 
          position: 'relative' 
        }}
      ></div>
    </div>
  );
}