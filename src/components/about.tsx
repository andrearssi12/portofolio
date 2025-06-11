"use client";

import React from 'react';
import { Image } from '@heroui/image';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-2xl font-bold text-slate-200 mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <p className="mb-4">
            Hello! My name is John and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p className="mb-4">
            Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Acme Inc. for a variety of clients.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 list-disc list-inside mt-4">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>HeroUI</li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <Image
            src="https://img.heroui.chat/image/avatar?w=300&h=300&u=john_doe"
            alt="John Doe"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};