"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 text-sm">
      <p>Designed & Built by Andrea</p>
      <div className="flex justify-center space-x-4 mt-4">
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="lucide:github" className="w-6 h-6" />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="lucide:linkedin" className="w-6 h-6" />
        </Link>
        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="lucide:twitter" className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
};
