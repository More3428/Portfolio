'use client';
import React, { useState } from "react";
import Modal from "@/components/Modal/page";


export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string;
    tools?: string;
    githubLink?: string;
    learnMoreLink?: string;
}

export interface ProjectUpdateData {
    title: string;
    description: string;
    image?: string;
    tools?: string;
    githubLink?: string;
    learnMoreLink?: string;
}

interface EditProjectFormProps {
    project: Project;
    onSave: (id: string, updatedData: ProjectUpdateData) => void;
    onClose: () => void;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({ project, onSave, onClose }) => {
    const [title, setTitle] = useState(project.title);
    const [description, setDescription] = useState(project.description);
    const [image, setImage] = useState(project.image || "");
    const [tools, setTools] = useState(project.tools || "");
    const [githubLink, setGithubLink] = useState(project.githubLink);
    const [learnMoreLink, setLearnMoreLink] = useState(project.learnMoreLink);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedData: ProjectUpdateData = {
            title,
            description,
            image,
            tools,
            githubLink,
            learnMoreLink,
        };
        onSave(project.id, updatedData);
    };

    return (
        
          
       
        
        <Modal isOpen={true} onClose={onClose}>
            <h2>Edit Project</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-900 rounded-lg shadow-lg">
                <div>
                    <p className="text-white text-sm">Title</p>
                </div>
                
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full h-14 text-md p-4 rounded-lg border border-gray-600  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div>
                    <p className="text-white text-sm">Description</p>
                </div>
                
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="w-full h-40 text-md p-4 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <div>
                    <p className="text-white text-sm">Image path</p>
                </div>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                    className="w-full h-14 text-md p-4 rounded-lg border border-gray-600  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div>
                    <p className="text-white text-sm">Tools used</p>
                </div>
                <input
                    type="text"
                    value={tools}
                    onChange={(e) => setTools(e.target.value)}
                    placeholder="Tools (comma-separated)"
                    className="w-full h-14 text-md p-4 rounded-lg border border-gray-600  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div>
                    <p className="text-white text-sm">Github Link</p>
                </div>
                <input
                    type="text"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    placeholder="GitHub Link"
                    className="w-full h-14 text-md p-4 rounded-lg border border-gray-600  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div>
                    <p className="text-white text-sm">Learn more link</p>
                </div>
                <input
                    type="text"
                    value={learnMoreLink}
                    onChange={(e) => setLearnMoreLink(e.target.value)}
                    placeholder="Learn More Link"
                    className="w-full h-14 text-md p-4 rounded-lg border border-gray-600  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex flex-row justify-center  p-4 space-x-4">
                <button type="submit" className=" p-2 rounded text-white bg-green-600 ">Save Changes</button>
                <button type="button" onClick={onClose} className="bg-red-600 text-white p-2 rounded">Cancel</button>
                </div>
            </form>
        </Modal>
    );
};

export default EditProjectForm;