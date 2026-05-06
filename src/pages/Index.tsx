import { useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { CustomCursor } from "@/components/CustomCursor";
import { SideNav } from "@/components/SideNav";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const [booted, setBooted] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Govind Kewat",
    "url": "https://govindkewat.dev",
    "jobTitle": "React Developer & Shopify Expert",
    "description": "Professional React developer and Shopify expert with 5+ years of experience building high-performance websites, headless CMS solutions, and e-commerce platforms.",
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "Shopify",
      "Headless CMS",
      "WordPress",
      "Web Performance",
      "E-commerce",
      "Frontend Development"
    ]
  };

  return (
    <>
      <SEO 
        title="Govind Kewat — React Developer, Shopify Expert & Headless CMS Specialist"
        description="React developer & Shopify expert with 5+ years building high-performance websites, headless CMS solutions, and e-commerce platforms. 25+ projects delivered with fast, performant frontends."
        canonical="https://govind-kewat.vercel.app/"
        keywords="React developer, Shopify developer, headless CMS, WordPress developer, React engineer, e-commerce developer, web performance engineer, frontend developer"
        structuredData={structuredData}
      />
      <h1 className="sr-only">Govind Kewat — React Developer, Shopify Expert & Headless CMS Specialist</h1>

      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      <CustomCursor />
      <div className="noise-overlay" />

      {booted && (
        <div className="min-h-screen md:pl-[220px] pb-20 md:pb-0">
          <SideNav />
          <main>
            <Hero />
            <Projects />
            <Stack />
            <Experience />
            <Education />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
