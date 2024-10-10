import { createCookieSessionStorage } from "@remix-run/node";
import { getRequiredServerEnvVar } from "../utils/misc";
import { Theme, isTheme } from "./theme-provider";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "my_remix_theme",
    secure: true,
    secrets: [getRequiredServerEnvVar("SESSION_SECRET")],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : Theme.DARK;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    
    // Set the 'expires' option dynamically when committing the session
    commit: () => themeStorage.commitSession(session, {
      expires: new Date(Date.now() + 730 * 24 * 60 * 60 * 1000) // TODO:expires in 360 days from 10/09/2024
    }),
  };
}

export { getThemeSession };
