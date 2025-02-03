import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Add a new project to Firestore
export const addProject = async (project) => {
    try {
        const docRef = await addDoc(collection(db, "projects"), project);
        console.log("Project added with ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding project:", error);
    }
};

// Get all projects from Firestore
export const getProjects = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projects = [];
        querySnapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        return projects;
    } catch (error) {
        console.error("Error getting projects:", error);
    }
};

// Delete a project from Firestore
export const deleteProject = async (id) => {
    try {
        await deleteDoc(doc(db, "projects", id));
        console.log("Project deleted with ID:", id);
    } catch (error) {
        console.error("Error deleting project:", error);
    }
};

export { collection, getDocs };
