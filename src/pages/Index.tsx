import { useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { CustomCursor } from "@/components/CustomCursor";
import { SideNav } from "@/components/SideNav";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <title>Govind Kewat — React, Headless CMS & Shopify Engineer</title>
      <meta name="description" content="React and Shopify developer with 5+ years building modern WordPress, headless CMS, no-code and commerce experiences. 25+ projects shipped with fast, performant frontends." />
      <link rel="canonical" href="/" />

      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      <CustomCursor />
      <div className="noise-overlay" />

      {booted && (
        <div className="min-h-screen md:pl-[220px] pb-20 md:pb-0">
          <SideNav />
          <main>
            <h1 className="sr-only">Govind Kewat — WordPress Developer Portfolio</h1>
            <Hero />
            <Projects />
            <BeforeAfter />
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
