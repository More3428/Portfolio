import React from "react";

const About = () => {
    return (
        <section id="About" >
            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative flex flex-col items-center">
                        <img src="/assets/Profile_Pic.jpg" alt="Profile" className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full drop-shadow-md mb-4 md:mb-4 lg:mb-6"/>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl tracking-tight text-white font-custom2 mb-2">
                            Andre Moreno
                        </h1> 
                        <h2 className="tracking-tight text-white sm:text-5xl font-custom2 relative z-10">Software Engineer</h2>
                        <div className='flex space-x-4 '>
                            <a href="https://github.com/More3428" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/Githubimage.png" alt="github" className='w-12 h-12 rounded-full drop-shadow-md'/>
                            </a>
                            <a href="https://www.linkedin.com/in/andre-moreno-670395188/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/LinkedIn.jpg" alt="LinkedIn" className='w-12 h-12 rounded-full drop-shadow-md'/>
                            </a>
                        </div>
                    </div>
                </div>  
            </div>  
            

        </section>

    );

};

export default About; 