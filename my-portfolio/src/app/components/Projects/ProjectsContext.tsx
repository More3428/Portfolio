import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    tools: string;
    githubLink: string;
    learnMoreLink: string;
}

interface ProjectsContextProps {
    projects: Project[];
    addProject: (project: Project) => void;
}

const ProjectsContext = createContext<ProjectsContextProps | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
    const [projects, setProjects] = useState<Project[]>([
        {
            title: "MBARI Modernization Project",
            description: "Full Stack Application for MBARI...",
            image: "/assets/mbarilogo.png",
            tools: "React, Next.js, TypeScript, Java, Springboot, SQL",
            githubLink: "https://github.com/MBARI-capstone/front-end",
            learnMoreLink: "#"
        },
        {
            title: "Portfolio",
            description: "A personal portfolio to showcase work...",
            image: "/assets/portfolio.png",
            tools: "React, Next.js, TypeScript, TailwindCSS, NextUI",
            githubLink: "https://github.com/More3428/Portfolio",
            learnMoreLink: "#"
        }
    ]);

    const addProject = (project: Project) => {
        console.log("Adding project:", project);
        setProjects((prevProjects) => [...prevProjects, project]);
    };

    return (
        <ProjectsContext.Provider value={{ projects, addProject }}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjects = () => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectsProvider");
    }
    return context;
};