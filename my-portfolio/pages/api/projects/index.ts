
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const projects = await prisma.project.findMany();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch projects' });
        }
    } else if (req.method === 'POST') {
        const { title, description, image, tools, githubLink, learnMoreLink } = req.body;
        try {
            const newProject = await prisma.project.create({
                data: { title, description, image, tools, githubLink, learnMoreLink },
            });
            res.status(201).json(newProject);
        } catch (error) {
            res.status(500).json({ error: 'Unable to create project' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
