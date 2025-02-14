'use client'

import React, { useEffect, useState } from 'react'
import FlipCard from '../FlipCard/page'
import { getGallery } from "../FireBaseDB/firestore"
import "../Gallery.css"
import { useRouter } from "next/navigation";
import Navbar from '../Navbar/page'
import { Timestamp } from 'firebase/firestore'




interface GalleryItem {
  id: string;
  title: string; 
  imageUrl: string;
  description: string;
  createdAt: Date; 
}

const Blog: React.FC = () => {
  const router = useRouter();
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
          const fetchProjects = async () => {
              const data: GalleryItem[] | undefined = await getGallery();
              if (data){
                const formattedData = data.map(item => ({
                  ...item, 
                  createdAt: item.createdAt instanceof Timestamp
                    ? item.createdAt.toDate(): new Date(), 
                }));
                  setGalleryItems(formattedData);
              }
          };
          fetchProjects();
      }, []);
    
  


 

  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full py-2 bg-slate-800 overflow-auto">
      <Navbar />
    
    <div className="gallery">
      
      {galleryItems.map((item, index) => (
        <FlipCard key={index} title ={item.title} imageUrl={item.imageUrl} description={item.description} date ={item.createdAt.toLocaleDateString()}   />
      ))}

      <button onClick={() => router.push('/GalleryUpload')} className="bg-blue-500 text-white p-2 rounded mt-4">
                        Add New Gallery Project
                    </button> 
    </div>
  </div>
     
  );
};

export default Blog