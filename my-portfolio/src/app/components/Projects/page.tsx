import React from "react";
import Buttons from '../Buttons/page';
import {ScrollShadow} from "@nextui-org/scroll-shadow";

const Projects = () => {
    return (
        <div className="w-full">
            <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center w-full max-w-7xl">

                    {/* Left Section: Skills and Experience */}
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <h1 className="tracking-tight text-white text-5xl font-custom2 relative z-10">Skills and Experience</h1>
                        <div className="bg-slate-900 text-justify text-white text-sm text-md lg:text-xl font-medium pb-4 tracking-tight font-serif border border-white p-4 rounded">
                            <h2 className="text-3xl underline">Skills</h2>
                            <ul>
                                <li>
                                    <p className="pb-2">Languages: Python, Java, JavaScript, C/C++, SQL, Bash</p>
                                    <div className="flex space-x-4 pb-2">
                                        <img src="/assets/pythonl.png" alt="Python" className='w-12 h-12 rounded-full drop-shadow-md' />
                                        <img src="/assets/java.png" alt="Java" className='w-12 h-12 rounded-full drop-shadow-md' />
                                        <img src="/assets/JavaScript.png" alt="JavaScript" className='w-12 h-12 rounded-full drop-shadow-md' />
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
                            <div className="border p-4 pb-2">
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
                    <div className="w-1/2 flex flex-col items-center justify-center p-4">
                        <h1 className="tracking-tight text-white text-5xl font-custom2 relative z-10">Projects</h1>
                        
                        <div className=" text-white p-4 rounded-lg h-96 w-full overflow-y-scroll">
                            <ScrollShadow hideScrollBar>
                            {/* Example Project Cards */}
                            <div className="flex flex-row bg-slate-900 p-4 mb-4 rounded-lg">
                                <div className="p-4"> 
                                    <img src="/assets/mbarilogo.png" alt="bash" className='w-40 h-auto max-w-full max-h-40 bg-white rounded drop-shadow-md' />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">MBARI Modernization Project</h2>
                                    <p className="text-sm">Description of Project 1.</p>
                                </div>
                                
                            </div>
                            <div className=" bg-slate-900 p-4 mb-4 rounded-lg">
                                <h2 className="text-xl font-bold">Project 2</h2>
                                <p className="text-sm">Description of Project 2.</p>
                            </div>
                            <div className="bg-slate-900 p-4 mb-4 rounded-lg">
                                <h2 className="text-xl font-bold">Project 3</h2>
                                <p className="text-sm">Description of Project 3.</p>
                            </div>
                            <div className="bg-slate-900 p-4 mb-4 rounded-lg">
                                <h2 className="text-xl font-bold">Project 4</h2>
                                <p className="text-sm">Description of Project 4.</p>
                            </div>
                            <div className="bg-slate-900 p-4 mb-4 rounded-lg">
                                <h2 className="text-xl font-bold">Project 5</h2>
                                <p className="text-sm">Description of Project 5.</p>
                            </div>
                            </ScrollShadow>
                            {/* Add more projects as needed */}
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;