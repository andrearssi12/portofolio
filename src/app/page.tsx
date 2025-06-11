import { About } from "@/components/about";
import { Navbar } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-400">
      <Navbar className="bg-navy-900/90 backdrop-blur-md fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link href="#" color="primary" className="text-2xl font-bold">
            AR
          </Link>
          <div className="hidden md:flex space-x-6">
            {["About", "Experience", "Work", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
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
      </Navbar>

      <main className="container mx-auto px-4 pt-24">
        <Header />
        <About />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>

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
    </div>
  );
}
