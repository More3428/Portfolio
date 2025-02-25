'use client'
import React, { useState } from 'react'
import { GalleryItem, GalleryUpdateData } from '../../app/GalleryUpload/page';
import ProtectedRoute from '@/components/ProtectedRoute';
import Modal from '@/components/Modal/page';





interface EditGalleryFormProps {
    item: GalleryItem;
    onSave: (id: string, updatedData: GalleryUpdateData) => void;
    onClose: () => void;
}



    
    const EditGalleryForm: React.FC<EditGalleryFormProps> = ({ item, onSave, onClose }) => {
        const [title, setTitle] = useState(item.title);
        const [description, setDescription] = useState(item.description);
        const [imageUrl, setImageUrl] = useState(item.imageUrl);
    
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            const updatedData: GalleryUpdateData = {
                title,
                description,
                imageUrl,
            };
            onSave(item.id, updatedData);
        };
    
        return (
            <ProtectedRoute>
                <Modal isOpen={true} onClose={onClose}>
            
                
                    <h2 className="text-xl text-white font-bold mb-4 font-custom3">Edit Gallery Item</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-900 rounded-lg shadow-lg">
                        <div className='p-2'>
                            <h2 className='text-white font-custom3'> Title: </h2>
                            <input type="text" className="rounded p-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                        </div>
                        <div className='p-2'>
                            <h2 className='text-white font-custom3'>Description:</h2>
                            <textarea value={description} className='rounded w-full border-t-large p-2' onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                        </div>
                        <div className='p-2'>
                            <h2 className='text-white font-custom3'>Image path:</h2>
                            <input type="text" value={imageUrl} className='rounded p-2' onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
                        </div>
                        
                        <div className="flex justify-between mt-4">
                            <button type="submit" className="bg-green-500 text-white p-2 rounded">Save</button>
                            <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded">Cancel</button>
                        </div>
                    </form>
                    
               
            
            </Modal>
            </ProtectedRoute>
        );
    };

export default EditGalleryForm;