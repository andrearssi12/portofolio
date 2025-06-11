import React from 'react';
import { Tabs, Tab } from '@heroui/tabs';

const experiences = [
    {
        company: "Acme Inc",
        position: "Senior Software Engineer",
        period: "January 2021 - Present",
        responsibilities: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Node.js, and HeroUI",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]
    },
    {
        company: "Startup XYZ",
        position: "Frontend Developer",
        period: "July 2018 - December 2020",
        responsibilities: [
            "Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and jQuery",
            "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
            "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
        ]
    },
    {
        company: "Web Agency ABC",
        position: "Web Developer Intern",
        period: "June 2017 - June 2018",
        responsibilities: [
            "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
            "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
            "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser"
        ]
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-2xl font-bold text-slate-200 mb-8">Where I&apos;ve Worked</h2>
            <Tabs aria-label="Work experience" color="primary" variant="underlined">
                {experiences.map((exp, index) => (
                    <Tab key={index} title={exp.company}>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-slate-200">{exp.position} <span className="text-primary-400">@ {exp.company}</span></h3>
                            <p className="text-sm mb-4">{exp.period}</p>
                            <ul className="list-disc list-inside space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </section>
    );
};