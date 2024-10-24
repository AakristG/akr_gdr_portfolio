// We do not import the mdx files here inorder to make use of dynamic imports inside $postId file
export interface BlogList {
    slug: string;
    title: string;
    publishDate: string;
    description: string;
    pathName: string;
    readingTime: string;
  }
  
  export const blogList: Array<BlogList> = [
    // {
    //   slug: "FineTuning Llama-2 and T-5",
    //   title: "Week 8: ",
    //   publishDate: "October 11th 2024",
    //   description:
    //     "Add here",
    //   pathName: "/blog/code-splitting-i18n",
    //   readingTime: "5 min",
    // },
    // {
    //   slug: "week7",
    //   title: "Week 7: The art of LaVi-Bridge",
    //   publishDate: "October 5th 2024",
    //   description:
    //     "Implementing and understanding how LaVi-Bridge operates and learning how to intergrate Llama 2 with custom data",
    //   pathName: "/blog/week7",
    //   readingTime: "5 min",
    // },
    // {
    //   slug: "week6",
    //   title: "Week 6: Large Language Models and Stable Diffusion recreation using PyTorch",
    //   publishDate: "September 25th 2024",
    //   description:
    //     "Applying the concepts of the Transformer Model to test and train Large Language Model",
    //   pathName: "/blog/week6",
    //   readingTime: "5 min",
    // },
    {
      slug: "week5",
      title: "Week 5: Transformer Model: the process, the thoughts, and the attention",
      publishDate: "October 18th 2024",/* Original was September 11th, 2024 */
      description:
        "Reading and understanding the aspects of the Transformer Model from Google Brain",
      pathName: "/blog/week5",
      readingTime: "8 min",
    },
    {
      slug: "week1",
      title: "Week 1-4: Introduction to Machine Learning and PyTorch",
      publishDate: "October 5th 2024", /* Original was August 19th, 2024*/
      description:
        "Dedicated to learning how to building matrices, familiarizing with PyTorch, and learning more about applicable math concepts",
      pathName: "/blog/week1",
      readingTime: "8 min",
    },
  ];
  
  export const imgSrcs = {
    mobile:
      "https://res.cloudinary.com/dhmibl6q3/image/upload/v1728787421/file_i0o7ym.png",
    desktop:
      "https://res.cloudinary.com/dhmibl6q3/image/upload/v1728787421/file_i0o7ym.png",
  };