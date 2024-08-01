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

          </div>
        </div>
      
          
            {/* < Navbar /> */}
            {/* < Projects />
            < Contact /> */}
         
        
        

      
    </div>
  );
}
