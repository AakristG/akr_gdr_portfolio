import { oitTools, projectList } from "~/data/projectsMetaData";
import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";

function ProjectCard({
  title,
  tech,
  summary,
  link,
  inProgress,
}: {
  title: string;
  tech: string;
  summary: string;
  link: string;
  inProgress?: boolean;
}) {
  return (
    <StaggerChild className="rounded-xl bg-gradient-to-r from-primary via-plants to-text-secondary p-1">
      <div className="h-full w-full rounded-lg bg-white px-6 py-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="min-w-0 flex-1 font-sans text-xl font-bold leading-[1.3] md:text-2xl">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          {inProgress ? (
            <p className="shrink-0 pt-1 text-right font-sans text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm md:text-base">
              Work under process
            </p>
          ) : null}
        </div>
        <p className="mt-2 font-sans text-sm text-text-secondary md:text-base">
          {tech}
        </p>
        <p className="mt-4 text-sm md:text-base">{summary}</p>
      </div>
    </StaggerChild>
  );
}

export default function ProjectsSection() {
  return (
    <StaggerParent className="mx-auto my-0 w-full max-w-6xl">
      <StaggerChild>
        <h1 className="mb-8 font-sans text-5xl font-bold leading-[1.15] md:text-6xl">
          Projects
        </h1>
      </StaggerChild>

      <StaggerChild className="mb-10 rounded-xl bg-gradient-to-r from-primary via-plants to-text-secondary p-1">
        <div className="h-full w-full rounded-lg bg-white px-6 py-5 md:px-8 md:py-6">
          <div className="flex items-start justify-between gap-3">
            <h2 className="min-w-0 flex-1 font-sans text-xl font-bold leading-[1.3] md:text-2xl">
              <span className="title-underline">
                UT Dallas Office of Information Technology
              </span>{" "}
              <span className="font-medium text-sm text-text-secondary">
                (Database Management Team)
              </span>
            </h2>
            <p className="shrink-0 pt-1 text-right font-sans text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm md:text-base">
              Work under process
            </p>
          </div>
          <p className="mt-3 font-sans text-sm text-text-secondary md:text-base">
            {oitTools.join(", ")}
          </p>
          <p className="mt-4 text-sm md:text-base">
            Managed and monitored database infrastructure across MySQL,
            PostgreSQL, SQL Server, Oracle, AWS, and Azure. Worked on database
            auditing, monitoring, change tracking, data integrity, logging,
            administrative connection management, and automation across multiple
            database platforms.
          </p>
        </div>
      </StaggerChild>

      <div className="grid grid-cols-1 gap-6">
        {projectList.flatMap((post) => {
          const cards = [
            <ProjectCard key={post.title} {...post} />,
          ];

          if (post.title.startsWith("PoliAware")) {
            cards.push(
              <StaggerChild key="more-on-github" className="-mt-3">
                <a
                  href="https://github.com/AakristG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-sans text-sm font-bold text-text-secondary underline shadow-none hover:text-text-primary"
                >
                  More on GitHub
                </a>
              </StaggerChild>,
            );
          }

          return cards;
        })}
      </div>
    </StaggerParent>
  );
}
