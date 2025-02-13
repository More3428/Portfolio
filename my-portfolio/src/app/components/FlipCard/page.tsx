'use client'
import React, { useState } from "react";
import "../FlipCard.css"

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
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h1>{title}</h1>
          <img src={imageUrl} alt="Gallery Item" />
        </div>
        <div className="flip-card-back flex-col">
          <div>
            <p>{description}</p>
          </div>
          <div>
            <p>{date}</p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 