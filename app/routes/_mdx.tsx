import { NavLink, Outlet, useLocation } from "@remix-run/react";
import { blogList } from "~/data/blogMetaData";
import { ArrowLeft } from "lucide-react";
import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";

// No need for links function if importing locally.
const BlogLayout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentPost = blogList.find(({ pathName }) => pathName === pathname);

  return (
    <StaggerParent >
      <div className="mx-auto flex w-full max-w-[47rem]">
        <ArrowLeft />{" "}
        <NavLink className="back-button ml-2 font-sans" to={"/blog"}>
          Back
        </NavLink>
      </div>
      {currentPost ? (
        <header className="text-center">
          <StaggerChild className="my-10 font-semibold uppercase text-text-secondary dark:text-d-text-secondary">
            <p>
              {currentPost.publishDate} ~ {currentPost.readingTime} read
            </p>
          </StaggerChild>

          <StaggerChild className="mb-20 text-4xl font-bold leading-[1.3] md:text-6xl">
            <h1>{currentPost.title}</h1>
          </StaggerChild>
        </header>
      ) : null}

      <StaggerChild className="flex justify-center font-roboto ">
        <div className="prose w-full dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-text-primary prose-a:no-underline prose-pre:p-0 dark:prose-headings:text-d-text-primary">
          <Outlet />
        </div>
      </StaggerChild>
    </StaggerParent>
  );
};

export default BlogLayout;
