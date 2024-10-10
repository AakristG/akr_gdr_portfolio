export const Footer = () => {
    return (
      <footer className="mx-auto my-4 w-full max-w-7xl px-8 py-4 text-center text-[0.8rem] text-text-secondary dark:text-d-text-secondary">
        <span>
          &copy; {new Date().getFullYear()} Aakrist Godar. Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/aakristg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/AakristG"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
          <br />
          Designed with{" "}
          <a href="https://remix.run/" target="_blank" rel="noopener noreferrer">
            Remix, TailWind CSS, and React
          </a>
          .
        </span>
      </footer>
    );
  };
  
  export default Footer;