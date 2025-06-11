"use client";

import React from 'react';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Project One",
        description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        tech: ["React", "Node.js", "Express", "Spotify API"],
        github: "https://github.com/yourusername/project-one",
        demo: "https://project-one-demo.com"
    },
    {
        title: "Project Two",
        description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
        github: "https://github.com/yourusername/project-two",
        demo: "https://project-two-demo.com"
    },
    {
        title: "Project Three",
        description: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
        tech: ["Next.js", "Chart.js", "GitHub API"],
        github: "https://github.com/yourusername/project-three",
        demo: "https://project-three-demo.com"
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="work" className="py-20">
            <motion.h2
                className="text-2xl font-bold text-slate-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Some Things I&apos;ve Built
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="bg-navy-800 border-navy-700">
                            <CardBody>
                                <h3 className="text-xl font-semibold text-slate-200 mb-2">{project.title}</h3>
                                <p className="mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-navy-700 text-primary-400 px-2 py-1 rounded">{tech}</span>
                                    ))}
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-between">
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Icon icon="lucide:github" className="w-5 h-5" />
                                </Link>
                                <Button
                                    as="a"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    variant="light"
                                    size="sm"
                                >
                                    Live Demo
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};