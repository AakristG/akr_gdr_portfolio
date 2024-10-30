// /app/root.tsx

import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import clsx from "clsx";
import {
  ThemeProvider,
  useTheme,
  NonFlashOfWrongThemeEls,
} from "~/utils/theme-provider";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "Aakrist Godar - Portfolio" },
    {
      name: "description",
      content: "A Personal Portfolio Aakrist Godar, where you can read his blog-posts.",
    },
    { property: "og:title", content: "Aakrist's Personal Website" },
    {
      property: "og:description",
      content: "A Personal Portfolio Aakrist Godar, where you can read his blog-posts.",
    },
    { property: "og:url", content: "https://akr-gdr-portfolio-2d0oh67kw-aakrist-godars-projects.vercel.app/" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" },
  ];
};

function App() {
  const [theme] = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  //Update the css immediately
  const cssUpdate = Date.now();

  // Ensure the component is fully mounted before applying visibility
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html
      lang="en"
      className={clsx(theme, { "invisible": !isMounted })} 
    >
      <head>
        <Meta />
        <link rel="preload" href={'/tailwind.css?v=${cssVersion}'} as="style" />
        <link rel="stylesheet" href={'/tailwind.css?v=${cssVersion}'} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        />
        {/* Optional GitHub CSS */}
        {/* <link rel="stylesheet" href="/styles/github-dark-dimmed.css" /> */}
        <NonFlashOfWrongThemeEls ssrTheme={false} />
        <Links />
      </head>
      <body className="bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
