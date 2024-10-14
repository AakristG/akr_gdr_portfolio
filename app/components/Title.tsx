import { NavLink } from "@remix-run/react";


export const Title  = () => {
  return (
    <NavLink to="/" className="inline-block">
       
        <div className="flex h-full w-full text-2xl content-center items-center rounded-full bg-background dark:bg-d-background">
            <h1 className="text-primary"> Aakrist Godar</h1>
        </div>
    </NavLink>
  );
};

export default Title;