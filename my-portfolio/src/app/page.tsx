import { Metadata } from 'next'
import '../app/globals.css';
import About from './components/About/page';
import Contact from './components/Contact/page';
import Navbar from './components/Navbar/page';
import Projects from './components/Projects/page';

export const metadata: Metadata = {
  title: 'Portfolio'
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full py-2 bg-slate-800 overflow-auto">
      

      <Navbar />

      <div className="w-full">
        <section id="about" className="min-h-screen flex flex-col items-center justify-center">
          <About />
        </section>
        
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center">
          <Projects />
        </section>
        
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
          <Contact />
        </section>
      </div>
    </div>
  );
}