import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
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

//Edit Project
export const editProject = async (id, updatedData) => {
    try {
        const projectRef = doc(db, "projects", id);
        await updateDoc(projectRef, updatedData);
        console.log("Projects updated with ID:", id);
    } catch (error) {
        console.error("Error updating project:", error);
    }
};


//Upload To Gallery
export const addToGallery = async(gallery) => {
    try {
        const docRef = await addDoc(collection(db, "gallery"), gallery);
        console.log("Project added to Gallery with ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding to Gallery:", error);
    }
};

//Get all Projects from Gallery
export const getGallery = async() => {
    try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        const gallery = [];
        querySnapshot.forEach((doc) => {
            gallery.push({ id:  doc.id, ...doc.data() });
        });
        return gallery;
    } catch(error) {
        console.error("Error getting gallery:", error); 
    }
};

//Delete Project from Gallery
export const deleteGalleryProject = async (id) => {
    try {
        await deleteDoc(doc(db, "gallery", id)); 
        console.log("Gallery project deleted with ID:", id);
    } catch(error) {
        console.error("Failed to delete gallery project:", error); 
    }
}

//Edit Gallery Project
export const editGalleryItem = async (id, updatedData) => {
    try {
        const galleryRef = doc(db, "gallery", id);
        await updateDoc(galleryRef, updatedData);
        console.log("Gallery item updated with ID:", id);
    } catch (error) {
        console.error("Error updating gallery project:", error); 
    }
};



export { collection, getDocs };
