import styles from "highlight.js/styles/github-dark-dimmed.css";

import type { LinksFunction } from "@remix-run/node";
import { NavLink, Outlet, useLocation } from "@remix-run/react";
import { blogList } from "~/data/blogMetaData";
import { ArrowLeft } from "lucide-react";
import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark-dimmed.min.css" }];
};

const BlogLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  // For now, we're just going to use the blogList data without loader.
  // In the future, we'll use a loader to fetch the data from a CMS.
  const currentPost = blogList.find(({ pathName }) => pathName === pathname);

  return (
    <StaggerParent>
      <div className="mx-auto flex w-full max-w-[47rem]">
        <ArrowLeft />{" "}
        <NavLink className="back-button ml-2 font-sans" to={"/blog"}>
          Back
        </NavLink>
      </div>
      {currentPost ? (
        <header className="text-center">
          <StaggerChild className="my-10 font-sans font-semibold uppercase text-text-secondary dark:text-d-text-secondary">
            <p>
              {currentPost.publishDate} ~ {currentPost.readingTime} read
            </p>
          </StaggerChild>

          <StaggerChild className="mb-20 text-4xl font-bold leading-[1.3] md:text-6xl">
            <h1>{currentPost.title}</h1>
          </StaggerChild>
        </header>
      ) : (
        <></>
      )}

      <StaggerChild className="flex justify-center">
        <div className="prose w-full dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-text-primary prose-a:no-underline prose-pre:p-0 dark:prose-headings:text-d-text-primary">
          <Outlet />
        </div>
      </StaggerChild>
    </StaggerParent>
  );
}

export default BlogLayout;
