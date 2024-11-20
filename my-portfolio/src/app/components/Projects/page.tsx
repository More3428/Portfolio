"use client"
import { useEffect, useRef, useState } from 'react';
import Buttons from '../Buttons/page';
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import { useRouter } from 'next/navigation';

type Project = {
    title: string;
    description: string;
    image?: string;
    tools: string;
    githubLink?: string;
    learnMoreLink?: string;
};

const Projects = () => {
    const [projects, setProjects ] = useState<Project[]>([]);
    const router = useRouter();

    // Fetch projects from the API when the component mounts
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);
                } else {
                    console.error("Failed to fetch projects");
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">

            {/* Left Section: Skills and Experience */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
                <h1 className="text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl text-white font-custom3 relative z-10 pb-4 shadow-xl">Skills and Experience</h1>
                <div className="bg-slate-900 text-justify text-white text-sm text-md lg:text-xl font-medium pb-4 tracking-tight font-serif border border-slate-500 p-4 rounded flex-grow">
                    <h2 className="text-3xl underline">Skills</h2>
                    <ul>
                        <li>
                            <p className="pb-2">Languages: Python, Java, JavaScript, C/C++, SQL, Bash</p>
                            <div className="flex space-x-4 pb-2">
                                <img src="/assets/pythonl.png" alt="Python" className='w-12 h-12 rounded-full drop-shadow-md' />
                                <img src="/assets/java.png" alt="Java" className='w-12 h-12 rounded-full drop-shadow-md' />
                                <img src="/assets/javascript.png" alt="JavaScript" className='w-12 h-12 rounded-full drop-shadow-md' />
                                <img src="/assets/c++.png" alt="c++" className='w-12 h-12 rounded-full drop-shadow-md' />
                                <img src="/assets/mysql.png" alt="mysql" className='w-12 h-12 rounded-full drop-shadow-md' />
                                <img src="/assets/bash.png" alt="bash" className='w-12 h-12 rounded-full drop-shadow-md' />
                            </div>
                        </li>
                        <li>
                            <p className="pb-2">Frameworks: React, Spring Boot, Next.js</p>
                            <div className="flex space-x-4 pb-2">
                                <img src="/assets/ReactLogo.png" alt="React" className='w-12 h-12 rounded-full drop-shadow-md' />
                                <img src="/assets/spring.png" alt="Spring Boot" className='w-12 h-12 rounded-full drop-shadow-md' />
                                <img src="/assets/nextjs.png" alt="Next.js" className='w-12 h-12 rounded-full drop-shadow-md' />
                            </div>
                        </li>
                    </ul>
                    <h1 className="text-3xl pb-1">Work Experience</h1>
                    <div className="border border-slate-500 rounded p-4 pb-2">
                        <h2 className="font-bold">Full-Stack Developer (Intern)</h2>
                        <h3>MBARI: (Aug 2023 - Dec 2023)</h3>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="text-left"><strong>Full-Stack Development:</strong> Modernized the framework from Pearl to React, to create a modernized front/back-end</p>
                            </li>
                            <li>
                                <p className="text-left"><strong>RESTful-API:</strong><span className="font-light"> Managed and created data for ship operators to be able to log expeditions using API requests</span></p>
                            </li>
                            <li>
                                <p className="text-left"><strong>UI/UX Design:</strong><span className="font-light"> Took lead role in developing a user-friendly UI, utilizing React's framework and Tailwind CSS. I used experience from my multimedia design class to implement efficient design principles.</span></p>
                            </li>
                        </ul>
                    </div>

                    
                    <div className="flex justify-end p-4">
                        <Buttons />
                    </div>
                </div>
            </div>

            {/* Right Section: Projects */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
                <h1 className="tracking-tight text-white text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl font-custom3 relative p-4">Projects</h1>
                
                <div className="text-white p-4 rounded-lg flex-grow w-full h-[40rem] overflow-auto custom-scrollbar ">
                    <ScrollShadow hideScrollBar>
                       
                    {projects.map((project, index) => (
                    <div key={index} className="grid grid-cols-[auto,1fr] gap-4 bg-slate-900 border border-slate-500 p-2 mb-4 rounded-lg">
                        
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

                        <div font-mono text-left>
                        <h2 className="font-custom2 text-3xl underline decoration-1"> {project.title}</h2>
                        <p className="text-sm">{project.description}</p>
                        <h3 className="text-gray-400 text-sm">Tools: {project.tools} </h3>
                        </div>

                    </div>
                ))}

                    
                    </ScrollShadow>
                    
                </div>
                {/*Uncomment when ready to add another Project */}
                    {/* <button onClick={() => router.push('/addProject')} className="bg-blue-500 text-white p-2 rounded mt-4">
                        Add New Project
                    </button> */}
               
            </div>
        </div>
    </section>


    );
};

export default Projects;