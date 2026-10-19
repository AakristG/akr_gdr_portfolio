import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";

const buttonClassName =
  "inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 font-sans text-base font-semibold text-white no-underline shadow-none transition-opacity hover:text-white hover:opacity-90 md:text-lg";

export default function ContactSection() {
  return (
    <StaggerParent className="mx-auto my-0 w-full">
      <StaggerChild>
        <h1 className="mb-6 font-sans text-5xl font-bold leading-[1.15] md:text-6xl">
          Contact
        </h1>
      </StaggerChild>

      <StaggerChild>
        <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="https://www.linkedin.com/in/aakristg/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClassName}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AakristG"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClassName}
          >
            GitHub
          </a>
          <a href="mailto:aakrist.godar.1@gmail.com" className={buttonClassName}>
            aakrist.godar.1@gmail.com
          </a>
        </div>
      </StaggerChild>
    </StaggerParent>
  );
}
