import React from "react";

const Projects = () => {
    return (
        <div className="w-full">
            <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center w-full max-w-7xl">

                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <h1 className="tracking-tight text-white text-5xl font-custom2 relative z-10"> Skills and Experience </h1>
                        <div className="bg-slate-900 text-justify text-white text-sm text-md lg:text-xl font-medium pb-4 tracking-tight font-serif border border-white p-4 rounded">
                            <h2 className=" text-3xl underline">Skills</h2>
                            <ul>
                                <li>
                                    <p className="">Languages: Python, Java, JavaScript, C/C++, SQL, Bash </p>
                                </li>
                                <li>
                                    <p>Frameworks: React, Spring boot, Next.js  </p>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center ">
                        <h1 className="tracking-tight text-white text-5xl font-custom2 relative z-10">Projects</h1>
                        
                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;