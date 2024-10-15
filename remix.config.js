/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    ignoredRouteFiles: ["**/.*"],
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    serverBuildDirectory: "build",
    serverBuildPath: "build/index.js",
    publicPath: "/build/",
    serverBuildTarget: "vercel",
    future: {
      unstable_tailwind: true,
      v2_routeConvention: true,
    },
    mdx: async (filename) => {
      const [rehypeHighlight] = await Promise.all([
        import("rehype-highlight").then((mod) => mod.default),
      ]);
  
      return {
        rehypePlugins: [rehypeHighlight],
      };
    },
  };