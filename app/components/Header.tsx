import Title from "./Title";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-200 bg-white p-[2em] font-sans font-bold uppercase text-text-primary">
      <Title />
      <Nav />
    </header>
  );
};

export default Header;
