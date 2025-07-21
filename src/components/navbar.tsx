"use client";

import React from "react";
import { Navbar as HerouiNavbar } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export const Navbar: React.FC = () => {
  return (
    <HerouiNavbar className="bg-navy-900/90 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="#" color="primary" className="text-2xl font-bold">
          AR
        </Link>
        <div className="hidden md:flex space-x-6">
          {["About", "Experience", "Work", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(`${item.toLowerCase()}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              color="foreground"
              className="hover:text-primary-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <Button
          as="a"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="bordered"
          color="primary"
          size="sm"
          className="hidden md:flex"
        >
          Resume
        </Button>
      </div>
    </HerouiNavbar>
  );
};
