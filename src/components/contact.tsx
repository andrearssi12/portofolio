"use client";

import React from 'react';
import { Button } from '@heroui/button';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 text-center">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Get In Touch</h2>
            <p className="mb-8 max-w-md mx-auto">
                Although I&apos;m not currently looking for any new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <Button
                as="a"
                href="mailto:hello@example.com"
                color="primary"
                variant="bordered"
                size="lg"
            >
                Say Hello
            </Button>
        </section>
    );
};