import React, { useState } from 'react'
import { GalleryItem, GalleryUpdateData } from '../GalleryUpload/page';





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
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Edit Gallery Item</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
                        <div className="flex justify-between mt-4">
                            <button type="submit" className="bg-green-500 text-white p-2 rounded">Save</button>
                            <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

export default EditGalleryForm;