import { lazy, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useLocation } from "@remix-run/react";
import { ReactTyped } from "react-typed";
import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";
import SpringLoad from "~/components/SpringLoad";
import LazySection from "~/components/LazySection";
import ScrollProgressRail from "~/components/ScrollProgressRail";
import SectionReveal from "~/components/SectionReveal";
import SectionDivider from "~/components/SectionDivider";
import ContactSection from "~/components/ContactSection";
import { imgSrcs } from "~/data/blogMetaData";

const EducationSection = lazy(() => import("~/components/EducationSection"));
const ExperienceSection = lazy(() => import("~/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("~/components/ProjectsSection"));

function AboutSection() {
  const [isClient, setIsClient] = useState(false);
  const imgSrc = isMobile ? imgSrcs.mobile : imgSrcs.desktop;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="mx-0 flex w-full flex-[1] items-center justify-between max-w-md:flex-col-reverse">
        <StaggerParent className="max-w-md:flex-[0] flex-[1] px-[1em] py-0 max-w-md:pb-[1.5em] max-w-md:text-center">
          <h1 className="mb-[0.5em] text-3xl font-bold leading-[1.3] md:text-5xl">
            {"Hi there! I'm Aakrist."}
          </h1>
          <StaggerChild>
            <div className="text-lg md:text-xl">
              <div className="animated-typing">
                <ReactTyped
                  strings={[
                    "An Aspiring Software Engineer",
                    "Machine Learning Enthusiast",
                    "Full Stack Developer",
                    "Data Engineer",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                />
              </div>
            </div>
          </StaggerChild>
          <br />
          <StaggerChild>
            <p className="text-lg md:text-xl">
              Find more about me on{" "}
              <a
                href="https://www.linkedin.com/in/aakristg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/AakristG"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              .
            </p>
          </StaggerChild>
        </StaggerParent>

        <div className="relative my-0 flex items-center p-2 text-center max-w-md:mb-[1rem]">
          <picture className="flex items-center bg-white">
            <SpringLoad>
              <img
                className="mb-[1em] h-auto w-[300px] max-w-full rounded-2xl object-contain shadow-md transition-transform duration-500 hover:scale-[1.03] md:w-[420px] lg:w-[520px]"
                alt="Aakrist Godar"
                src={imgSrc}
              />
            </SpringLoad>
          </picture>
        </div>
      </div>

      <StaggerParent className="mx-auto mt-10 grid w-full max-w-6xl gap-8 px-[1em] md:grid-cols-2 md:gap-12">
        <StaggerChild>
          <h2 className="mb-3 font-sans text-2xl font-bold leading-[1.3] md:text-3xl">
            My background
          </h2>
          <p className="text-lg md:text-l my-5">
            I enjoy building systems that leverage A.I. to do complex technical work more reliable. 
            I’ve worked across Linux, SQL databases, cloud platforms, and identity management.
          </p>
          <p className="text-lg md:text-l my-5">
          I focus on solving problems through automation, validating data, and making processes more efficient and easier to maintain.
          I also really love hackathons and competitions.
          </p>
        </StaggerChild>
        <StaggerChild>
          <h2 className="mb-3 font-sans text-2xl font-bold leading-[1.3] md:text-3xl">
            My other interests
          </h2>
          <p className="text-lg md:text-l my-5">
            Outside my professional commitments, I enjoy volunteering with my local community, playing chess, watching and playing soccer, cooking, playing multiplayer video games,
            and reading books.
          </p>
          <p className="text-lg md:text-l">
            I like to focus on social and communical impact. I value continuous learning and curiosity through experience and real world situations.
          </p>
        </StaggerChild>
      </StaggerParent>
    </div>
  );
}

function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);
}

export default function Index() {
  useHashScroll();

  return (
    <div className="flex w-full flex-col pb-12 xl:pl-28">
      <ScrollProgressRail />

      <section id="about" className="scroll-mt-32">
        <SectionReveal eager>
          <AboutSection />
        </SectionReveal>
      </section>

      <SectionDivider />

      <section id="education" className="scroll-mt-32">
        <SectionReveal>
          <LazySection minHeight="12rem">
            <EducationSection />
          </LazySection>
        </SectionReveal>
      </section>

      <SectionDivider />

      <section id="experience" className="scroll-mt-32">
        <SectionReveal>
          <LazySection minHeight="16rem">
            <ExperienceSection />
          </LazySection>
        </SectionReveal>
      </section>

      <SectionDivider />

      <section id="projects" className="scroll-mt-32">
        <SectionReveal>
          <LazySection minHeight="16rem">
            <ProjectsSection />
          </LazySection>
        </SectionReveal>
      </section>

      <SectionDivider />

      <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-32">
        <SectionReveal>
          <ContactSection />
        </SectionReveal>
      </section>
    </div>
  );
}
