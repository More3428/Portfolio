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
    <form onSubmit = {handleSubmit}>
        <h3>Login</h3>

        <div className='mb-3'>
            <label>Email address</label>
            <input
                type = "email"
                className='form-control'
                placeholder='Enter email'
                value = {email}
                onChange={(e) => setEmail(e.target.value)}>
            </input>
        </div>
        <div className='mb-3'>
            <label>Password</label>
            <input
                type = "password"
                className='form-control'
                placeholder='Enter password'
                value = {password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>
        </div>

        <div className='"d-grid'>
            <button type = "submit" className='btn btn-primary'>
                Login
            </button>
        </div>
        
    </form>
  )
}

export default Login