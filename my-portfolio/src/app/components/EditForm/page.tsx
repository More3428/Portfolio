import React, { useState } from "react";
import Modal from "../Modal/page";

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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                />
                <input
                    type="text"
                    value={tools}
                    onChange={(e) => setTools(e.target.value)}
                    placeholder="Tools (comma-separated)"
                />
                <input
                    type="text"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    placeholder="GitHub Link"
                />
                <input
                    type="text"
                    value={learnMoreLink}
                    onChange={(e) => setLearnMoreLink(e.target.value)}
                    placeholder="Learn More Link"
                />
                <button type="submit">Save Changes</button>
                <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
            </form>
        </Modal>
    );
};

export default EditProjectForm;