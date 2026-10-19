import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const stops = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export default function ScrollProgressRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let frame = 0;

    const connect = () => {
      const elements = stops
        .map((stop) => document.getElementById(stop.id))
        .filter((el): el is HTMLElement => Boolean(el));

      if (elements.length < stops.length) {
        frame = requestAnimationFrame(connect);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target.id) {
            setActiveId(visible.target.id);
          }
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
      );

      elements.forEach((el) => observer?.observe(el));
    };

    connect();

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed left-4 top-32 z-20 hidden h-[calc(100vh-12rem)] w-28 xl:block">
      <div className="relative h-full pl-3">
        <div className="absolute left-[0.7rem] top-0 h-full w-px bg-gray-200" />
        <motion.div
          className="absolute left-[0.7rem] top-0 h-full w-px origin-top bg-primary"
          style={{ scaleY }}
        />
        <ol className="flex h-full flex-col justify-between">
          {stops.map((stop) => (
            <li key={stop.id} className="relative">
              <a
                href={`/#${stop.id}`}
                className="pointer-events-auto group flex items-center gap-3"
              >
                <span
                  className={`block h-2.5 w-2.5 rounded-full border-2 border-white shadow ${
                    activeId === stop.id ? "bg-primary" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`font-sans text-[11px] font-semibold uppercase tracking-wide ${
                    activeId === stop.id
                      ? "text-primary"
                      : "text-text-secondary group-hover:text-primary"
                  }`}
                >
                  {stop.label}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
