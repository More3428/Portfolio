import React from "react";

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center w-full max-w-7xl">
                {/* Left Section */}
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <img src="/assets/Profile_Pic.jpg" alt="Profile" className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full drop-shadow-md mb-4 md:mb-4 lg:mb-6"/>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl tracking-tight text-white font-custom2 mb-2">
                        Andre Moreno
                    </h1> 
                    <h2 className="tracking-tight text-white sm:text-5xl font-custom2 relative z-10">Software Engineer</h2>
                    <div className='flex space-x-4'>
                        <a href="https://github.com/More3428" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/Githubimage.png" alt="github" className='w-12 h-12 rounded-full drop-shadow-md'/>
                        </a>
                        <a href="https://www.linkedin.com/in/andre-moreno-670395188/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/LinkedIn.jpg" alt="LinkedIn" className='w-12 h-12 rounded-full drop-shadow-md'/>
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-1/2 flex items-center justify-center ">
                    <div className="text-center text-white px-4 ">
                        <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-custom2 mb-4">About</h1>
                        <p className="text-justify text-sm text-md lg:text-xl font-medium pb-4 tracking-tight font-serif border border-white p-4 rounded">
                        As a first-generation college graduate, I carry a deep-seated passion for continuous learning and relentless innovation. I hold a degree in Computer Science, specializing in Software Engineering. My skills extend to web development, data management, and UI/UX design. Additionally, I have experience as a Data Analyst, building data tables and managing data using Microsoft Power Query. I possess strong problem-solving, team management, and adaptability skills. I am passionate about technology and committed to contributing to innovative projects.
                        </p>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-4 ">
                            <div className="items-center justify-center">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-custom2 mb-4 mt-4">Education</h2>
                        
                                    <div className=" space-y-2 text-sm text-md lg:text-xl  font-serif " >
                                        <p> California State University, Monterey Bay </p>
                                        <p> Bachelors of Science </p>
                                        <p> Computer Science </p>
                                        <p> 2019-2023 </p>
                                    </div>
                            </div>
                            <div className="items-center justify-end">
                                <img src="../assets/csumblogo.png" alt="csumblogo.png" className="w-24 h-24" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;