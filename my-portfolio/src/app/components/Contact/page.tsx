"use client"; 


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e: {
      target: any; preventDefault: () => void; 
}) => {
    e.preventDefault();

    if (form.current) {
    emailjs
      .sendForm('service_2kulyeu', 'template_3cowp9e', form.current!, {
        publicKey: 'ihpkAKenLO46EGgQE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
};

  return (
    <div className='flex min-h-screen'>

<div className="w-1/2 flex flex-col items-center gap-4 p-10">
    <div className="flex items-start mt-36">
        <h1 className="text-7xl font-custom3 p-4 pb-8 text-white font-bold underline underline-thin underline-offset-4">Contact Me</h1>
    </div>
    
    <div className="flex flex-grow">
        <h1 className="text-xl font-mono text-white font-bold">andre.moreno5270@gmail.com </h1>
    </div>
</div>

  <div className="w-1/2 flex items-center justify-center p-10">
    <div className="w-full max-w-2xl bg-slate-900 outline outline-1 outline-slate-500 shadow-lg rounded-lg p-8">
      <div>
        <h1 className='text-white font-mono text-center p-4'> Contact Form</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 p-4'>
          
            <label htmlFor="name" className="block text-l font-mono font-medium text-white">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              className="font-mono mt-1 block w-full px-3 py-2 border bg-slate-200 rounded-md shadow-sm focus:outline-neutral-700 sm:text-sm"
              required
            />
          </div>
          <div className='w-full md:w-1/2 p-4'>
            <label htmlFor="email" className="block text-l  font-medium font-mono text-white">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="font-mono mt-1 block w-full px-3 py-2 border bg-slate-200 rounded-md shadow-sm focus:outline-neutral-700 sm:text-sm"
              required
            />
          </div>
        </div>

        <div className='p-4'>
          <label htmlFor="message" className="block text-sm font-mono font-medium text-white">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border bg-slate-200 rounded-md font-mono shadow-sm focus:outline-neutral-700 sm:text-sm"
            required
          />
        </div>
        <div className='p-4'>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-full font-mono bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-700"
          >
            Send
          </motion.button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default Contact; 