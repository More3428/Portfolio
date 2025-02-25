"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { addProject, deleteProject, editProject } from '../FireBaseDB/firestore';
import { getProjects } from "../FireBaseDB/firestore"; 
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import EditProjectForm, { ProjectUpdateData } from '../EditForm/page';
import Navbar from '@/components/Navbar/page';
import ProtectedRoute from '@/components/ProtectedRoute';



interface Projects {
    id: string; 
    title: string;
    description: string;
    image?: string;
    tools?: string;
    githubLink?: string;
    learnMoreLink?: string;
}

const AddProject = () => {
    const [projects, setProjects ] = useState<Projects[]>([]);
    
        // Fetch projects from the API when the component mounts
        useEffect(() => {
            const fetchProjects = async () => {
                const data: Projects[] | undefined = await getProjects();
                if (data){
                    setProjects(data);
                }
            };
    
            fetchProjects();
        }, []);




    const [newProject, setNewProject] = useState({
        title: "",
        description: "",
        image: "",
        tools: "",
        githubLink: "",
        learnMoreLink: ""
    });

    const router = useRouter();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [projectToEdit, setProjectToEdit] = useState<Projects | null>(null);

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

    const handelDelete = async (id: string) => {
        try {
            await deleteProject(id);

            setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
        } catch(error) {
            console.error("Error deleting project:", error);
        }
    };

    const openEditModal = (project: Projects) => {
        setProjectToEdit({
            ...project,
            tools: project.tools ?? "",
        });
    
        setIsEditModalOpen(true);
    };

    const handleEditSubmit = async (id: string, updatedData: ProjectUpdateData) => {
            try {
                await editProject(id, updatedData);

                setProjects(prevProjects =>
                    prevProjects.map(project =>
                        project.id === id ? { ...project, ...updatedData } : project

                    )
                );
               
                setIsEditModalOpen(false);
                setProjectToEdit(null);
                // Refresh the projects list
            } catch (error) {
                console.error("Error updating project:", error);
            
        }
    };


    return (
        <ProtectedRoute>
        <div className='bg-slate-800'>
            <Navbar />
        
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-slate-800">
            
        <div className="md:w-1/2 flex flex-col p-4 max-w-7xl">
            <h1 className="text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl text-white font-custom3 relative z-10 pb-4 shadow-xl">Add New Project</h1>
            <div className="bg-slate-900 text-center text-sm font-medium pb-4 tracking-tight font-serif border border-slate-500 p-4 rounded">
            <form onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    <div>
                        <div className='sm:col-span-4'>
                        <input name="title" placeholder="Title" value={newProject.title} onChange={handleChange} className="mb-2 p-2 w-1/2 rounded" />
                        </div>
                    </div>   
                    
                    <div>
                        <textarea 
                            name="description" 
                            placeholder="Description"  
                            value={newProject.description} 
                            onChange={handleChange}
                            rows = {4} 
                            className="mb-2 p-2 w-1/2 rounded" />
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
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
            <h1 className="tracking-tight text-white text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl font-custom3 relative p-4">Edit or Delete Projects</h1>
            <div className="text-white p-4 rounded-lg flex-grow w-full h-[40rem] overflow-auto custom-scrollbar ">
                    <ScrollShadow hideScrollBar>
                       
                    {projects.map((project) => (
                    <div key={project.id} className="grid grid-cols-[auto,1fr] gap-4 bg-slate-900 border border-slate-500 p-2 mb-4 rounded-lg">
                        
                        <div className='p-2'>
                            {project.image && (
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} image`} 
                                    className='w-40 h-auto max-w-full max-h-40 rounded drop-shadow-md'  />
                            )}  

                        
                        <div className='flex space-x-4 pb-2'>
                                {project.githubLink && (
                                    <p className="underline font-mono">
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 underline hover:text-blue-700"
                                        >
                                        Github
                                        </a>
                                    </p>
                            )}

                            {project.learnMoreLink && (
                                <p className="underline font-mono">
                                    <a
                                        href={project.learnMoreLink}
                                        target ="_blank"
                                        rel="noopener noreferrer"
                                        className='text-blue-400 underline hover:text-blue-700'
                                    >
                                    Learn More
                                    </a>
                                </p>
                            )}

                        </div>
                        </div>

                        <div >
                        <h2 className="font-custom2 text-3xl underline decoration-1"> {project.title}</h2>
                        <p className="text-sm">{project.description}</p>
                        <h3 className="text-gray-400 text-sm">Tools: {project.tools} </h3>
                        <div className='flex p-2'>
                            <div className='p-2'>
                            <button onClick={() => openEditModal(project)}
                                    className="bg-green-600 text-white p-2 rounded">
                                         Edit
                                         </button>
                            </div>
                            <div className='p-2'>
                                <button onClick={()=> handelDelete(project.id)} className='bg-red-500 text-white p-2 rounded'>
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
        {isEditModalOpen && projectToEdit && (
        <EditProjectForm 
        project={projectToEdit} 
        onSave={(id, updatedData) => {
            handleEditSubmit(id, updatedData);
            setIsEditModalOpen(false); // Close modal after saving
        }} 
        onClose={() => setIsEditModalOpen(false)}
        />
        )}
        </div>
        </div>
        </ProtectedRoute>
        
    );
   
};



export default AddProject;