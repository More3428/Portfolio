'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../app/FireBaseDB/firebaseConfig';

// Create a context
const AuthContext = createContext<{ user: User | null; logout: () => void }>({
     user: null,
     logout: () => {},
     });

// Provider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    
    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out successfully.")
        } catch (error){
            console.error("Logout failed.", error); 
        }
    }

    return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
