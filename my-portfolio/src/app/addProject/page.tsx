"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useProjects } from '../components/Projects/ProjectsContext';

const AddProject = () => {
    const router = useRouter();
    const { addProject } = useProjects();
    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        image: "",
        tools: "",
        githubLink: "",
        learnMoreLink: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProject((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        addProject(newProject);
        router.push('/'); // Redirect back to main page after submission
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add New Project</h1>
            <input name="title" placeholder="Title" value={newProject.title} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="description" placeholder="Description" value={newProject.description} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="image" placeholder="Image URL" value={newProject.image} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="tools" placeholder="Tools" value={newProject.tools} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="githubLink" placeholder="GitHub Link" value={newProject.githubLink} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <input name="learnMoreLink" placeholder="Learn More Link" value={newProject.learnMoreLink} onChange={handleChange} className="mb-2 p-2 w-full rounded" />
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded mt-2">Add Project</button>
        </div>
    );
};

export default AddProject;