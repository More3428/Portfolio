'use client'

import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../FireBaseDB/firebaseConfig';
import { useRouter } from 'next/navigation'; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {

            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            router.push('/');
            
        } catch (error) {
            console.error("Failed user login:", error); 
        }
    };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
        
    <form onSubmit = {handleSubmit} className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col space-y-4'>
        <h3 className='text-white text-center'>Login</h3>

        <div className='mb-3'>
            <label className='text-white'>Email address: </label>
            <input
                type = "email"
                className='p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter email'
                value = {email}
                onChange={(e) => setEmail(e.target.value)}>
            </input>
        </div>
        <div className='mb-3'>
            <label className='text-white'>Password: </label>
            <input
                type = "password"
                className='p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter password'
                value = {password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>
        </div>

        
            <button type = "submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 '>
                Login
            </button>
       
        
    </form>
    
    </div>
  )
}

export default Login