"use client"
import { useEffect, useRef } from 'react';
import Buttons from '../Buttons/page';
import {ScrollShadow} from "@nextui-org/scroll-shadow";

const Projects = () => {
    const projectListRef = useRef(null);
    const topBarRef = useRef(null);
    const bottomBarRef = useRef(null); 


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
                    {/* Example Project Cards */}
                    <div className="grid grid-cols-[auto,1fr] gap-4 bg-slate-900 border border-slate-500 p-2 mb-4 rounded-lg">
                        <div className="p-2"> 
                            <img src="/assets/mbarilogo.png" alt="bash" className='w-40 h-auto max-w-full max-h-40 rounded drop-shadow-md' />
                            <div className="flex space-x-4 pb-2">
                                <p className="underline font-mono">Learn More</p>
                                <a href="https://github.com/MBARI-capstone/front-end" target="_blank" rel="noopener noreferrer">
                                <p className="underline font-mono">Github</p>
                                </a>
                            </div>
                        </div>
                        <div className="font-mono text-left">
                            <h2 className="font-custom2 text-3xl underline decoration-1">MBARI Modernization Project</h2>
                            
                            <p className="text-sm font-semibold">Full Stack Application</p>
                            <p className="text-sm underline decoration-1">Worked on Front-End Development and Back-End integration. Created a program with a team of 4 where MBARI is able to log their expeditions and gather data. Worked on Front-End Development and Back-End integration. Created a UI which allowed for an easy user-experience</p>
                            <h3 className='font-semibold'>Tools: React, Next.js, TypeScript, Java, Springboot, SQL  </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-[auto,1fr] gap-4 bg-slate-900 border border-slate-500 p-2 mb-4 rounded-lg">
                        <div className="p-2"> 
                            <img src="/assets/portfolio.png" alt="portfolio" className='w-40 h-auto max-w-full max-h-40  rounded drop-shadow-md' />
                            <div className="flex space-x-4 pb-2">
                                <p className="underline font-mono">Learn More</p>
                                <a href="https://github.com/More3428/Portfolio" target="_blank" rel="noopener noreferrer">
                                <p className="underline font-mono">Github</p>
                                </a>
                            </div>
                        </div>
                        <div className="font-mono text-left">
                            <h2 className="font-custom2 text-3xl underline decoration-1">Portfolio</h2>
                            <p className="text-sm font-semibold">Web Development</p>
                            <p className="text-sm">Created this portfolio to showcase my work as a software engineer.</p>
                            <p className="text-sm">Here you will learn more about me and what I've been up to since graduating college in december of 2023</p>
                            <p className="text-sm">Mostly used front-End development on this portfolio project.</p>
                            <h3>Tools: React, Next.js, TypeScript, TailwindCSS, NextUI  </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-[auto,1fr] gap-4 bg-slate-900 border border-slate-500 p-2 mb-4 rounded-lg">
                        <div className="p-2"> 
                            <img src="/assets/journal-man-11.png" alt="taskApp" className='w-30 h-auto max-w-full max-h-40 rounded drop-shadow-md' />
                            <div className="flex space-x-4 pb-2">
                                <p className="underline font-mono">Learn More</p>
                                <a href="https://github.com/More3428/TakeAWalk" target="_blank" rel="noopener noreferrer">
                                <p className="underline font-mono">Github</p>
                                </a>
                            </div>
                        </div>
                        <div className="font-mono text-left">
                            <h2 className="font-custom2 text-3xl underline decoration-1">Medical Image Management System</h2>
                            <p className="text-sm font-semibold">Full-stack application</p>
                            <p className="text-sm font-semibold">Front/Back End Development </p>
                            <p className="text-sm underline decoration-1">A Java-based application to manage, organize, and retrieve endoscopic images and videos. Includes basic metadata tagging, secure access controls, and search functionality and image processing capabilities (like brightness adjustment or simple filtering), which could be useful in a medical imaging context.</p>
                            <h3 className="font-semibold">Tools: Java, Spring Boot, PostgreSQL, OpenCV, Flutter</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-[auto,1fr] gap-4 bg-slate-900 border border-slate-500 p-2 mb-4 rounded-lg">
                        <div className="p-2"> 
                            <img src="/assets/redisicon2.png" alt="Redis" className='w-40 h-auto max-w-full max-h-40  rounded drop-shadow-md' />
                            <div className="flex space-x-4 pb-2">
                                <p className="underline font-mono">Learn More</p>
                                <a href="https://github.com/More3428/Redis" target="_blank" rel="noopener noreferrer">
                                <p className="underline font-mono">Github</p>
                                </a>
                            </div>
                        </div>
                        <div className="font-mono text-left">
                            <h2 className="font-custom2 text-3xl underline decoration-1">Redis Clone in C/C++</h2>
                            <p className="text-sm font-semibold">DSA and Network Programming</p>
                            <p className="text-sm">Created a clone of Redis from scratch using C/C++.</p>
                            <p className="text-sm">Created an in Memory data structure store.</p>
                            <p className="text-sm">Data Structures and Network Programming</p>
                            <h3>Tools: C/C++  </h3>
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-[auto,1fr] gap-4 bg-slate-900 border border-slate-500 p-2 mb-4 rounded-lg">
                        <div className="p-2"> 
                            <img src="/assets/mbarilogo.png" alt="bash" className='w-40 h-auto max-w-full max-h-40 bg-white rounded drop-shadow-md' />
                            <div className="flex space-x-4 pb-2">
                                <p className="underline font-mono">Learn More</p>
                                <a href="https://github.com/MBARI-capstone/front-end" target="_blank" rel="noopener noreferrer">
                                <p className="underline font-mono">Github</p>
                                </a>
                            </div>
                        </div>
                        <div className="font-mono text-left">
                            <h2 className="font-custom2 text-3xl underline decoration-1">MBARI Modernization Project</h2>
                            <p className="text-sm">Created a program with a team of 4 where MBARI is able to log their expeditions and gather data.</p>
                            <p className="text-sm">Worked on Front-End Development and Back-End integration.</p>
                            <p className="text-sm">Created a UI which allowed for an easy user-experience</p>
                            <h3>Tools: React, Next.js, TypeScript, Java, Springboot, SQL  </h3>
                        </div>
                    </div> */}
                    </ScrollShadow>
                    {/* Add more projects as needed */}
                </div>
               
            </div>
        </div>
    </section>


    );
};

export default Projects;