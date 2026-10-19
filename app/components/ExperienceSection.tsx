import { experienceList } from "~/data/experienceMetaData";
import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";

export default function ExperienceSection() {
  return (
    <StaggerParent className="mx-auto my-0 w-full max-w-6xl">
      <StaggerChild>
        <h1 className="mb-8 font-sans text-5xl font-bold leading-[1.15] md:text-6xl">
          Experience
        </h1>
      </StaggerChild>

      <div className="relative ml-3 border-l-2 border-primary/30 pl-8 md:ml-4">
        {experienceList.map((item) => (
          <StaggerChild
            key={`${item.title}-${item.period}`}
            className="relative mb-10 last:mb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[2.45rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-primary shadow md:-left-[2.55rem]"
            />
            <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-wide text-primary">
              {item.period}
            </p>
            <div className="rounded-xl bg-gradient-to-r from-primary via-plants to-text-secondary p-1">
              <div className="h-full w-full rounded-lg bg-white px-5 py-4 md:px-6 md:py-5">
                <h2 className="font-sans text-lg font-bold leading-[1.3] md:text-xl">
                  <span className="title-underline">{item.title}</span>
                </h2>
                <p className="mt-1 font-sans text-sm text-text-secondary md:text-base">
                  {item.org} · {item.location}
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="text-text-secondary">
                        →
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </StaggerChild>
        ))}
      </div>
    </StaggerParent>
  );
}
