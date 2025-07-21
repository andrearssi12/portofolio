import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default async function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
