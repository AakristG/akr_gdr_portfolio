import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const activeClassName = "selected navlink";

const navItems = [
  { label: "About", to: "/#about", hash: "#about" },
  { label: "Education", to: "/#education", hash: "#education" },
  { label: "Experience", to: "/#experience", hash: "#experience" },
  { label: "Projects", to: "/#projects", hash: "#projects" },
  { label: "Contact", to: "/#contact", hash: "#contact" },
] as const;

function useSectionLinkClass() {
  const location = useLocation();

  return (hash: string) => {
    const onHome = location.pathname === "/";
    const currentHash = location.hash || "#about";
    const isActive = onHome && currentHash === hash;
    return isActive ? activeClassName : "navlink";
  };
}

const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => {
  const linkClass = useSectionLinkClass();

  return (
    <>
      {navItems.map(({ label, to, hash }) => (
        <Link
          key={to}
          to={to}
          prefetch="render"
          className={`${linkClass(hash)} !min-w-0 !px-1.5 lg:!ml-2 text-sm`}
          onClick={onNavigate}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
      <nav className="flex min-w-0 flex-[1] items-center justify-end">
        <div className="hidden justify-end lg:flex">
          <NavLinks />
        </div>

        <div className="flex w-[75px] justify-end lg:hidden">
          <button onClick={toggleNavbar} aria-label="Toggle navigation">
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div key="nav-links" className="mt-4 basis-full lg:hidden">
          <NavLinks onNavigate={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Nav;
