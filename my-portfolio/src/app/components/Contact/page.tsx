"use client"; 


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

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
    <div className= "p-6 bg-slate-900 outline outline-1 outline-white shadow-lg rounded-lg mt-10">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className='flex flex-row p-2 '>
        <div className='p-4'>
          <label htmlFor="name" className="block text-l font-mono font-medium text-white">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            className="font-mono mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-neutral-700  sm:text-sm"
            required
          />
          </div>
          <div  className='p-4'>
          <label htmlFor="email" className="block text-l font-medium font-mono text-white">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            className="font-mono mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-neutral-700  sm:text-sm"
            required
          />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-mono font-medium text-white">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-neutral-700 sm:text-sm"
            required
          />
        </div>
        <div>
        <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Contact; 