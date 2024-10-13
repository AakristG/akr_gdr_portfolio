// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projectList: Array<Project> = [
  {
    title: "AdFusion",
    description:
      " A way to integrate LLMs into diffusion models to enhance context interpretability and image generation in the field of advertising.",
    link: "https://github.com/AakristG/Shemmeys-Suberria",
  },
  {
    title: "PoliAware",
    description:
      "A website that incorporates personalized GPT-4 and Bard models to teach young adults about their representative",
    link: "https://github.com/NextGenPolicTech/PoliAware",
  },
  {
    title: "Shemmey's Subberia",
    description:
      "An sandwich-making game with a unique GUI built with Java and Java Swing properties",
    link: "https://github.com/AakristG/Shemmeys-Suberria",
  },
  {
    title: "Cherry Bomb",
    description:
      " Led the development an omni-directional robot with a Propositional-Integral-Device control loop using object orientation programming Java",
    link: "https://github.com/FRC-Chain-Reaction-Robotics/NewSwerve2024",
  },
];