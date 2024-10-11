import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

import type { Theme } from "~/utils/theme-provider";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "~/utils/theme-provider";
import { getThemeSession } from "~/utils/theme.server";
import Header from "~/components/Header";
import Footer from "~/components/Footer";


{/**if I directly plug in /tailwind.css into href, then all the css dissapers  */}
import stylesheet from "../public/tailwind.css";


// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: "stylesheet",
//       href: stylesheet,
//     },
//   ];
// };



export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "Aakrist's Personal Website" },
    { name: "description", content: "A Personal Portfolio Aakrist Godar, where you can read his blog-posts." },
    { property: "og:title", content: "Aakrist's Personal Website" },
    { property: "og:description", content: "A Personal Portfolio Aakrist Godar, where you can read his blog-posts." },
    { property: "og:url", content: "https://your-website-url.com" }, // Replace with your actual URL
    { name: "twitter:card", content: "summary_large_image" }, // Example Twitter card type
    { property: "og:image", content: "https://your-image-url.com/image.jpg" }, // Replace with your image URL
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" }, // Optional, can improve SEO
    { name: "twitter:title", content: "Aakrist's Personal Website" }, // Optional
    { name: "twitter:description", content: "A Personal Portfolio Aakrist Godar, where you can read his blog-posts." }, // Optional
    { name: "twitter:image", content: "https://your-image-url.com/image.jpg" }, // Replace with your image URL
  ];
};



export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

function App() {
  const data = useLoaderData<LoaderData>();

  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <link rel="stylesheet" href="/public/tailwind.css"></link>
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
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
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}