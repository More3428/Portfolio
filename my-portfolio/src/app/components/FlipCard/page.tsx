'use client'
import React, { useState } from "react";
import "../FlipCard.css"

interface FlipCardProps {
    image: string;
    description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({image, description}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Gallery Item" />
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 