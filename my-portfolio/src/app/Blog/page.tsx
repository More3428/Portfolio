'use client'

import React, { useEffect, useState } from 'react'
import FlipCard from '../components/FlipCard/page'
import { collection, getDocs } from "../components/FireBaseDB/firestore"
import { db } from "../components/FireBaseDB/firebaseConfig"
import "../Gallery.css"
import ImageUpload from '../components/GalleryUpload/page'

interface GalleryItem {
  imageUrl: string;
  description: string;
}

const Blog: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    
  


 

  return (
    <div className="gallery">
      
      {galleryItems.map((item, index) => (
        <FlipCard key={index} image={item.imageUrl} description={item.description} />
      ))}
    </div>
  )
}

export default Blog