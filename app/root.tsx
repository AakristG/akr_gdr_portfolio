// /app/root.tsx

import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import stylesheet from "~/styles/tailwind.css?url";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: stylesheet,
      as: "style",
    },
    {
      rel: "stylesheet",
      href: stylesheet,
    },
    {
      rel: "preconnect",
      href: "https://fonts.cdnfonts.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.cdnfonts.com/css/proxima-nova",
    },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "Aakrist Godar - Portfolio" },
    {
      name: "description",
      content: "Personal portfolio of Aakrist Godar — computer engineer, projects, and contact.",
    },
    { property: "og:title", content: "Aakrist's Personal Website" },
    {
      property: "og:description",
      content: "Personal portfolio of Aakrist Godar — computer engineer, projects, and contact.",
    },
    { property: "og:url", content: "https://akr-gdr-portfolio-2d0oh67kw-aakrist-godars-projects.vercel.app/" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" },
    { name: "color-scheme", content: "light only" },
  ];
};

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white font-sans text-text-primary">
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col bg-white py-[1em] px-[2em]">
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
