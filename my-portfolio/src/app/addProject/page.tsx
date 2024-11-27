"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { addProject } from '../components/FireBaseDB/firestore';


const AddProject = () => {
    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        image: "",
        tools: "",
        githubLink: "",
        learnMoreLink: ""
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        await addProject(newProject);
        setNewProject({
            title: "",
            description: "",
            image: "",
            tools: "",
            githubLink: "",
            learnMoreLink: "",
        });

        if (Response) {
            router.push('/');
        } else {
            console.error('Failed to add Project');
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
                        <input name="title" placeholder="Title" value={newProject.title} onChange={handleChange} className="w-64 rounded text-m font-medium text-gray-900 p-2  " />
                        </div>
                    </div>   
                    
                    <div>
                        <textarea 
                            name="description" 
                            placeholder="Description"  
                            value={newProject.description} 
                            onChange={handleChange}
                            rows = {4} 
                            className="block w-1/2 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-m p-2" />
                    </div>
                    <div>
                        <input 
                            name="image" 
                            placeholder="Image Path (e.g., /assets/githubimage.png)" 
                            value={newProject.image} 
                            onChange={handleChange} 
                            className="mb-2 p-2 w-1/2 rounded" />
                    </div>
                    <div>
                        <input name="tools" placeholder="Tools" value={newProject.tools} onChange={handleChange} className="mb-2 p-2 w-1/2 rounded" />
                    </div>
                    <div>
                        <input name="githubLink" placeholder="GitHub Link" value={newProject.githubLink} onChange={handleChange} className="mb-2 p-2 w-1/2 rounded" />
                    </div>
                    <div>
                      <input name="learnMoreLink" placeholder="Learn More Link" value={newProject.learnMoreLink} onChange={handleChange} className="mb-2 p-2 w-1/2 rounded" />  
                    </div>
                    
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Add Project</button>
                </div>    
            </form>
            
        </div>
        </div>
    );
};

export default AddProject;