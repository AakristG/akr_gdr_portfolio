import { NavLink } from "@remix-run/react";

export const Title = () => {
  return (
    <NavLink to="/#about" className="inline-block">
      <div className="flex h-full w-full content-center items-center rounded-full bg-white text-2xl">
        <h1 className="text-primary"> Aakrist Godar</h1>
      </div>
    </NavLink>
  );
};

export default Title;
