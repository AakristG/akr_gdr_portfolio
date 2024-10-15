// /app/root.tsx

import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, useTheme, NonFlashOfWrongThemeEls } from "~/utils/theme-provider";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "Aakrist Godar - Portfolio" },
    { name: "description", content: "A Personal Portfolio Aakrist Godar, where you can read his blog-posts." },
    { property: "og:title", content: "Aakrist's Personal Website" },
    { property: "og:description", content: "A Personal Portfolio Aakrist Godar, where you can read his blog-posts." },
    { property: "og:url", content: "https://your-website-url.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: "https://your-image-url.com/image.jpg" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: "Aakrist's Personal Website" },
    { name: "twitter:description", content: "A Personal Portfolio Aakrist Godar, where you can read his blog-posts." },
    { name: "twitter:image", content: "https://your-image-url.com/image.jpg" },
  ];
};

function App() {
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <link rel="stylesheet" href="/public/tailwind.css" />
        <NonFlashOfWrongThemeEls ssrTheme={false} />
      </head>
      <body className="bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary">
        <Analytics />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
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
