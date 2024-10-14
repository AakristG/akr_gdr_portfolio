import StaggerParent from "~/components/StaggerParent";
import StaggerChild from "~/components/StaggerChild";
import SpringLoad from "~/components/SpringLoad";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { imgSrcs } from "~/data/blogMetaData";
import { NavLink } from "@remix-run/react";
import { ReactTyped  } from 'react-typed';

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
          {"Hi there! I'm Aakrist."}
        </h1>
        <StaggerChild>
          <p className="text-lg md:text-xl">
            <div className="animated-typing">
              <ReactTyped 
                strings={[
                  "An Aspiring Software Engineer",
                  "Machine Learning Researcher",
                  "Back-End and Front-End Developer",
                  "Computer Engineer",
                  "Passionate about Robotic"
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
                />
            </div>
          </p>
        </StaggerChild>
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
            Read my coding <NavLink to={"/blog"}> Blog Posts</NavLink>.
          </p>
        </StaggerChild>
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
            Find about more about me on{" "}
            <a
              href="https://www.linkedin.com/in/aakristg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            {/* This can be leetcode later on
            {", "}
            <a
              href="https://twitter.com/razzmattazzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a> */}
            {" or "}
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
        <br />
        <StaggerChild>
          <p className="text-lg md:text-xl">
            {"This template can be found in my "} 
            <a
              href="https://github.com/AakristG/resume_template"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"GitHub"}
            </a>
            .
          </p>
        </StaggerChild>
      </StaggerParent>

      <div className="relative my-0 flex items-center p-2 text-center lg:h-[550px] lg:w-[550px] max-w-md:mb-[2rem]">
  <picture className="flex h-full w-full items-center bg-background dark:bg-d-background">
    {isClient && isImageLoaded ? (
      <SpringLoad>
        <img
          className="
            mb-[1em] 
            w-full 
            object-cover 
            scale-100  // No scaling on mobile
            lg:scale-125 lg:hover:scale-150 // Scaling on large screens
            transition-transform 
            duration-500"
          alt="Aakrist_pic"
          src={imgSrc}
        />
      </SpringLoad>
    ) : (
      <div className="h-full w-full bg-gray-200 rounded-full">
        {/* Placeholder div */}
      </div>
    )}
  </picture>
</div>

    </div>
  );
}