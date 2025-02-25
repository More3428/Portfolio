'use client'
import React, { useState } from "react";

interface FlipCardProps {
    title: string;
    imageUrl: string;
    description: string;
    date: string;
}

const FlipCard: React.FC<FlipCardProps> = ({title, imageUrl, description, date}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card w-64 h-64 perspective-1000 cursor-pointer ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className={`flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform ${isFlipped ? "rotate-y-180" : ""}`}>

        <div className="flip-card-front absolute w-full h-full bg-gray-300 flex items-center justify-center rounded-lg shadow-lg">
          
          <img src={imageUrl} alt="Gallery Item" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="flip-card-back  absolute w-full h-full bg-gray-900 text-white flex-col items-center justify-center rounded-lg shadow-lg rotate-y-180">
          
            <p className="p-4 text-sm font-semibold">
              {description}
            </p>
        
          <div>
            <p className="p-4 text-sm font-semibold">
              {date}
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 