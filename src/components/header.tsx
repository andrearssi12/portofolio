"use client";

import React from "react";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  return (
    <header className="min-h-screen flex flex-col justify-center">
      <motion.h1
        className="text-primary-400 text-lg mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, my name is
      </motion.h1>
      <motion.h2
        className="text-4xl md:text-7xl font-bold text-slate-200 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Andrea Rossi.
      </motion.h2>
      <motion.h3
        className="text-3xl md:text-6xl font-bold text-slate-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I build things for the web.
      </motion.h3>
      <motion.p
        className="max-w-xl text-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I&apos;m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences.
        {/* Currently, I'm focused on building accessible, human-centered products at <span className="text-primary-400">Acme Inc</span>. */}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          onPress={() => {
            const el = document.getElementById("work");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          color="primary"
          variant="bordered"
          size="lg"
          className="w-fit"
        >
          Check out my work!
        </Button>
      </motion.div>
    </header>
  );
};
