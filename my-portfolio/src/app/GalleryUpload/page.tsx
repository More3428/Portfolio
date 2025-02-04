'use client'
import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addToGallery } from "../components/FireBaseDB/firestore";
import { useRouter } from "next/navigation";
import { Timestamp } from "firebase/firestore";
import { error } from "console";

const AddToGallery = () => {
    const [newGalleryProject, setNewGalleryProject] = useState({
        title: "",
        description: "",
        imageUrl: "",
        createdAt: Timestamp.now()
    });

    const [errors, setErrors] = useState<{ title?: string; description?: string; imageUrl?: string }>({});
    const router = useRouter(); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewGalleryProject({ ...newGalleryProject, [name]: value });
        setErrors({ ...errors, [name]: ""});
    };

    // Validate fields before submission
    const validateFields = () => {
        const newErrors: { title?: string; description?: string; imageUrl?: string } = {};
        
        if (!newGalleryProject.title) newErrors.title = "Title is required.";
        if (!newGalleryProject.description) newErrors.description = "Description is required.";
        if (!newGalleryProject.imageUrl) newErrors.imageUrl = "Image URL is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
            e.preventDefault();

            if (!validateFields()) {
                return; // Stop submission if fields are invalid
            }

            try {
                await addToGallery(newGalleryProject);
                setNewGalleryProject({
                    title: "",
                    description: "",
                    imageUrl: "",
                    createdAt: Timestamp.now()
                });
    
            
                router.push('./components/Blog');
            } catch(error) {
                console.error('Failed to add Gallery Project');
            }
        };
        return (
            <div className='min-h-screen bg-slate-800 flex flex-col items-center justify-center '>
            <div className="container mx-auto p-4 bg-slate-800">
                <h1 className="text-2xl font-bold mb-4 text-white underline">Add New Project</h1>
                <form onSubmit={handleSubmit}>
                    <div className='space-y-12'>
                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className='sm:col-span-4'>
                            <input name="title" placeholder="Title" value={newGalleryProject.title} onChange={handleChange} className="w-64 rounded text-m font-medium text-gray-900 p-2  " />
                            </div>
                        </div>   
                        
                        <div>
                            <textarea 
                                name="description" 
                                placeholder="Description"  
                                value={newGalleryProject.description} 
                                onChange={handleChange}
                                rows = {4} 
                                className="block w-1/2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-m p-2" />
                        </div>
                        <div>
                            <input 
                                name="imageUrl" 
                                placeholder="Image Path (e.g., /assets/githubimage.png)" 
                                value={newGalleryProject.imageUrl} 
                                onChange={handleChange} 
                                className="mb-2 p-2 w-1/2 rounded" />
                        </div>
                        <div>
                            <input name="tools" placeholder="Tools" value={newGalleryProject.createdAt.toString()} onChange={handleChange} className="mb-2 p-2 w-1/2 rounded" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Add Project </button>
                    </div>    
                </form>
                
            </div>
            </div>
        );
    };
    
    export default AddToGallery;



