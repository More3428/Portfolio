"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const response = await fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProject)

        });

        if (response.ok) {
            router.push('/');
        } else {
            console.error('Failed to add Project');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add New Project</h1>
            <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" value={newProject.title} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="description" placeholder="Description" value={newProject.description} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="image" placeholder="Image URL" value={newProject.image} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="tools" placeholder="Tools" value={newProject.tools} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="githubLink" placeholder="GitHub Link" value={newProject.githubLink} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="learnMoreLink" placeholder="Learn More Link" value={newProject.learnMoreLink} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Add Project</button>
            </form>
        </div>
    );
};

export default AddProject;