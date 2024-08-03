import Head from 'next/head';
import '../app/globals.css'
import About from './components/About/page';

import Contact from './components/Contact/page';
import Navbar from './components/Navbar/page';
import Projects from './components/Projects/page';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-screen h-screen overflow-hidden py-2 bg-slate-800">
        <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

      
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-screen overflow-hidden">
            <About />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-screen overflow-hidden">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-white font-custom2 mb-2 underline">About Me</h1>
          <p className="font-custom2 text-2xl text-white margin: 0 auto">
          As a first-generation college graduate, I carry a deep-seated passion for continuous learning and relentless innovation. I view myself as a creator at heart, consistently seeking novel approaches and creative solutions. My mindset is geared towards thinking outside the traditional boundaries, driving me to constantly explore ways to enhance both processes and outcomes. Being a collaborative team player, I strive to leave a positive and lasting impact in every environment I engage with, contributing meaningfully and learning from each experience. My journey through academia as a trailblazer in my family has not only shaped my professional outlook but also instilled in me a strong sense of determination and adaptability, qualities I bring to every challenge I encounter.
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-white font-custom2 mb-2 underline ">Education</h3>
          
          <p className="font-custom2 text-4xl text-white margin: 0 auto">
          California State University, Monterey Bay
          </p>
          <p className='font-custom2 text-4xl text-white margin: 0 auto'>
            Bachelor of Science
          </p>
          <p className='font-custom2 text-3xl text-white margin: 0 auto'>
            Computer Science
          </p>
          
          <p className='font-custom2 text-3xl text-white margin: 0 auto'>
            2019-2023
          </p>
          
          <img src="/assets/csumblogo.png" alt="csumb" className='w-[75px] h-[75px] rounded-full drop-shadow-md' />
          

          </div>
        </div>
      
          
            < Navbar /> 
             < Projects />
            < Contact /> 
         
        
        

      
    </div>
  );
}
