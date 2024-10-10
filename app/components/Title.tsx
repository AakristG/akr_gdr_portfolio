import { NavLink } from "@remix-run/react";


export const Title  = () => {
  return (
    <NavLink to="/" className="inline-block">
       
        <div className="flex h-full w-full content-center items-center rounded-full bg-background dark:bg-d-background">
            <h1 className="text-white"> Aakrist Godar</h1>
        </div>
    </NavLink>
  );
};

export default Title;