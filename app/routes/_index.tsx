import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";
import SpringLoad from "~/components/SpringLoad";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { imgSrcs } from "~/data/blogMetaData";
import { NavLink } from "@remix-run/react";

export default function Index() {
  const [isClient, setIsClient] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false || isMobile);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    setIsClient(true);
    const img = new Image();
    const imgSrc = isMobile ? imgSrcs.mobile : imgSrcs.desktop;

    img.src = imgSrc;
 
    setImgSrc(imgSrc);
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  
  return (
    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-between max-w-md:flex-col-reverse">
      <StaggerParent className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center">
        <h1 className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl">
          Hi there! I'm Aakrist.
        </h1>
        <StaggerChild>
          <p className="text-lg md:text-xl">
            I'm a software engineering leader.
            <br />
            I like to write about Typescript, React, Node.js
            <br />
            and Software Architecture.
          </p>
        </StaggerChild>
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
            Read my <NavLink to={"/blog"}> Blog Posts</NavLink>.
          </p>
        </StaggerChild>
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
            Find me on{" "}
            <a
              href="https://www.linkedin.com/in/rajesh-babu-56270046/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            {", "}
            <a
              href="https://twitter.com/razzmattazzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            {" or "}
            <a
              href="https://github.com/rajeshbabu-oviva"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            .
          </p>
        </StaggerChild>
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
            Do you like my template ?
            <br />
            Check out the{" "}
            <a
              href="https://github.com/rajeshbabu-oviva/remix-mdx-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codebase
            </a>
            .
          </p>
        </StaggerChild>
      </StaggerParent>

      <div className="relative my-0 flex h-[300px] w-[300px] items-center rounded-full border-text-secondary bg-gradient-to-r from-primary via-plants to-text-secondary p-1 text-center dark:border-d-text-secondary dark:to-d-text-secondary lg:h-[550px] lg:w-[550px] max-w-md:mb-[2rem]">
        <picture className="flex aspect-square h-full w-full items-center rounded-full bg-background dark:bg-d-background ">
          {isClient && isImageLoaded ? (
            <SpringLoad>
              <img
                className="mb-[1em] w-full"
                alt="Illustration of person reading a book"
                src={imgSrc}
              />
            </SpringLoad>
          ) : (
            <div className="h-full w-full bg-gray-200 rounded-full"> {/* Placeholder div */}
            </div>
          )}
        </picture>
      </div>
    </div>
  );
}