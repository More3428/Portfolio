import React from "react";

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center w-full">
  <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
    
    {/* Left Section */}
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
      <img
        src="/assets/Profile_Pic.jpg"
        alt="Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full drop-shadow-md mb-4 md:mb-4 lg:mb-6"
      />
      <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-5xl tracking-tight text-white font-custom3 mb-2">
        Andre Moreno
      </h1>
      <h2 className="tracking-tight text-white sm:text-xs md:text-xl lg:text-2xl font-custom3 relative z-10 pb-2">
        Software Engineer
      </h2>
      <div className="flex space-x-4">
        <a href="https://github.com/More3428" target="_blank" rel="noopener noreferrer">
          <img src="/assets/githublogo.png" alt="github" className="w-12 h-12 rounded-full drop-shadow-md bg-white"/>
        </a>
        <a href="https://www.linkedin.com/in/andre-moreno-670395188/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/LinkedIn.jpg" alt="LinkedIn" className="w-12 h-12 rounded-full drop-shadow-md"/>
        </a>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-center text-3xl sm:text-xl md:text-2xl lg:text-3xl font-custom3 pb-3">About</h1>
        <div className="bg-slate-900 text-justify text-sm md:text-md lg:text-xl font-medium pb-4 tracking-tight font-serif border border-slate-500 p-4 rounded">
          <p className="pb-4">
            As a first-generation college graduate, I carry a deep-seated passion for continuous learning and relentless innovation. I hold a degree in Computer Science, specializing in Software Engineering.
          </p>
          <p className="pb-4">
            My skills involve working on front & back-end development. I am knowledgeabe on software project development, such as SDLC methodology.  
          </p>
          <p className="pb-1">
            Additionally, I interned as a Full-Stack Developer, focusing on front-end development and RESTful APIs. As a recent graduate, I am eager to start my career in the industry and am continuously honing my skills as a software engineer.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center mt-4">
          <div className="items-center justify-center">
            <h2 className="text-3xl sm:text-medium md:text-xl lg:text-2xl font-custom3 p-4">Education</h2>
            <div className="space-y-2 text-sm md:text-md lg:text-xl font-serif">
              <p>California State University, Monterey Bay</p>
              <p>Bachelor of Science</p>
              <p>Computer Science</p>
              <p>2019-2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
};

export default About;