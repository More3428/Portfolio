'use client'
import React, { useEffect, useState } from "react";
import { addToGallery, deleteGalleryProject, editGalleryItem, getGallery } from "../FireBaseDB/firestore";
import { useRouter } from "next/navigation";
import { Timestamp } from "firebase/firestore";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import GalleryEditForm from "../../components/GalleryEditForm/page";
import { useAuth } from "../AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Modal from "@/components/Modal/page";
import Navbar from "@/components/Navbar/page";


export interface GalleryItem {
    id: string;
    title: string; 
    imageUrl?: string;
    description: string;
    createdAt: Date; 
  }

export interface GalleryUpdateData {
    title: string;
    description: string;
    imageUrl?: string;
}


const AddToGallery = () => {
    const [newGalleryProject, setNewGalleryProject] = useState({
        title: "",
        description: "",
        imageUrl: "",
        createdAt: Timestamp.now()
    });

    const [errors, setErrors] = useState<{ title?: string; description?: string; imageUrl?: string }>({});
    const router = useRouter(); 
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [galleryItemToEdit, setGalleryItemToEdit] = useState<GalleryItem | null>(null);
    

    const openEditModal = (item: GalleryItem) => {
        setGalleryItemToEdit(item);
        setIsEditModalOpen(true); 
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewGalleryProject({ ...newGalleryProject, [name]: value });
        setErrors({ ...errors, [name]: ""});
    };

    const handleEditSubmit = async (id: string, updatedData: GalleryUpdateData) => {
        try {
            await editGalleryItem(id, updatedData);

            setGalleryItems(prevItems =>
                prevItems.map(item => item.id === id ? { ...item, ...updatedData} : item)
            );

            setIsEditModalOpen(false);
            setGalleryItemToEdit(null);
        } catch (error) {
            console.error("Error updating gallery project: ", error); 
        }
    }

    // Validate fields before submission
    const validateFields = () => {
        const newErrors: { title?: string; description?: string; imageUrl?: string } = {};
        
        if (!newGalleryProject.title) newErrors.title = "Title is required.";
        if (!newGalleryProject.description) newErrors.description = "Description is required.";
        if (!newGalleryProject.imageUrl) newErrors.imageUrl = "Image URL is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

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
    
            
                router.push('/Blog');
            } catch(error) {
                console.error('Failed to add Gallery Project');
            }
        };

        const handelDelete = async (id: string) => {
                try {
                    await deleteGalleryProject(id);
        
                    setGalleryItems(prevProjects => prevProjects.filter(newGalleryProject => newGalleryProject.id !== id));
                } catch(error) {
                    console.error("Error deleting project:", error);
                }
            };
        return (
            <ProtectedRoute>
                <div className="bg-slate-800">
                    <Navbar />
                </div>
            <div className='min-h-screen flex flex-col md:flex-row items-center justify-center bg-slate-800'>
            <div className="md:w-1/2 flex flex-col p-4">
                <h1 className="text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl text-white font-custom3 relative z-10 pb-4 shadow-xl">Add New Gallery Project</h1>
                <div className="bg-slate-900 text-center text-sm font-medium pb-4 tracking-tight font-serif border border-slate-500 p-4 rounded">
                <form onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <div className='sm:col-span-4'>
                            <input name="title" placeholder="Title" value={newGalleryProject.title} onChange={handleChange} className="mb-2 p-2 w-1/2 rounded" />
                            </div>
                        </div>   
                        
                        <div>
                            <textarea 
                                name="description" 
                                placeholder="Description"  
                                value={newGalleryProject.description} 
                                onChange={handleChange}
                                rows = {4} 
                                className="mb-2 p-2 w-1/2 rounded" />
                        </div>
                        <div>
                            <input 
                                name="imageUrl" 
                                placeholder="Image Path (e.g., /assets/githubimage.png)" 
                                value={newGalleryProject.imageUrl} 
                                onChange={handleChange} 
                                className="mb-2 p-2 w-1/2 rounded" />
                        </div>
                        
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Add Project </button>
                    </div>    
                </form>
                
                </div>
                
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
            <h1 className="tracking-tight text-white text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl font-custom3 relative p-4">Edit or Delete Gallery Projects</h1>
            <div className="text-white p-4 rounded-lg flex-grow w-full h-[40rem] overflow-auto custom-scrollbar ">
                    <ScrollShadow hideScrollBar>
                       
                    {galleryItems.map((item, index) => (
                    <div key={index} className="grid grid-cols-[auto,1fr] gap-4 bg-slate-900 border border-slate-500 p-2 mb-4 rounded-lg">
                        
                        <div className='p-2'>
                            {item.imageUrl && (
                                <img 
                                    src={item.imageUrl} 
                                    alt={`${item.title} image`} 
                                    className='w-40 h-auto max-w-full max-h-40 rounded drop-shadow-md'  />
                            )}  
                        </div>

                        <div >
                        <h2 className="font-custom2 text-3xl underline decoration-1"> {item.title}</h2>
                        <p className="text-sm">{item.description}</p>
                        <h3 className="text-gray-400 text-sm">Date: {item.createdAt.toLocaleDateString()} </h3>
                        <div className='flex p-2'>
                            <div className='p-2'>
                            <button onClick={() => openEditModal(item)}
                                    className="bg-green-600 text-white p-2 rounded">
                                         Edit
                                         </button>
                            </div>
                            <div className='p-2'>
                                <button onClick={()=> handelDelete(item.id)} className='bg-red-500 text-white p-2 rounded'>
                                    Delete
                                </button>
                            </div>
                        </div>
                        </div>

                    </div>
                ))}

                    
                    </ScrollShadow>
                    
                </div>
        </div>
        {isEditModalOpen && galleryItemToEdit && (
        <GalleryEditForm 
            item={galleryItemToEdit} 
            onSave={handleEditSubmit}
            onClose={() => setIsEditModalOpen(false)}
        />
        )}
        
            </div>
            </ProtectedRoute>
        );
    };
    
    export default AddToGallery;



