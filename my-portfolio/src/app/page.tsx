"use client"
import '../app/globals.css';
import About from './About/page';
import Contact from './Contact/page';
import Navbar from '@/components/Navbar/page';
import Projects from './Projects/page';



export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-start w-full py-2 bg-slate-800 overflow-auto">
      

      <Navbar />

      <div className="w-full">
        <section id="about" className="min-h-screen">
          <About />
        </section>
        
        <section id="projects" className="min-h-screen flex flex-col ">
          <Projects />
        </section>
        
        <section id="contact" className="min-h-screen ">
          <Contact />
        </section>
      </div>
    </div>
    
  );
}