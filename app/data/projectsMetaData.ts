// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projectList: Array<Project> = [
  {
    title: "Shemmey's Subberia",
    description:
      "An interactive game code with Java with Java FX and exported using Java FX",
    link: "https://github.com/AakristG/Shemmeys-Suberria",
  },
];