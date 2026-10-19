import { education } from "~/data/educationMetaData";
import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";

export default function EducationSection() {
  const { school, location, degree, expectedGraduation, activities, coursework } =
    education;

  return (
    <StaggerParent className="mx-auto my-0 w-full max-w-6xl">
      <StaggerChild>
        <h1 className="mb-6 font-sans text-5xl font-bold leading-[1.15] md:text-6xl">
          Education
        </h1>
      </StaggerChild>

      <StaggerChild className="rounded-xl bg-gradient-to-r from-primary via-plants to-text-secondary p-1">
        <div className="h-full w-full rounded-lg bg-white p-5 md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h2 className="font-sans text-xl font-bold leading-tight text-text-primary md:text-2xl">
              {school}
            </h2>
            <p className="font-sans text-sm text-text-secondary md:text-base">
              {expectedGraduation}
            </p>
          </div>
          <div className="mt-2 flex flex-wrap items-start justify-between gap-2">
            <p className="font-sans text-base text-text-secondary md:text-lg">
              {degree}
            </p>
            <p className="font-sans text-sm text-text-secondary md:text-base">
              {location}
            </p>
          </div>

          <div className="my-5 h-px w-full bg-gray-200" />

          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                Leadership & Activities
              </h3>
              <ul className="space-y-2 font-sans text-base text-text-primary md:text-lg">
                {activities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-text-secondary">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                Relevant Coursework
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {coursework.map((course) => (
                  <li key={course.code} className="group relative">
                    <span
                      tabIndex={0}
                      title={course.name}
                      aria-label={`${course.code}: ${course.name}`}
                      className="inline-block cursor-help rounded-lg bg-gray-100 px-2.5 py-1 font-sans text-sm text-text-primary md:text-base"
                    >
                      {course.code}
                    </span>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 hidden w-max max-w-[16rem] rounded-md bg-text-primary px-2.5 py-1.5 text-left text-xs font-medium text-white shadow-md group-hover:block group-focus-within:block"
                    >
                      {course.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </StaggerChild>
    </StaggerParent>
  );
}
