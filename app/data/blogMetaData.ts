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
    {
      slug: "LLM-recreation",
      title: "Week 6: Learning how to recreate a Large Language Model using PyTorch",
      publishDate: "September 25th 2024",
      description:
        "Applying the concepts of the Transformer Model to test and train Large Language Model",
      pathName: "/blog/code-splitting-i18n",
      readingTime: "5 min",
    },
    {
      slug: "transformer-model",
      title: "Week 5: Transformer Model: the process, the thoughts, and the attention",
      publishDate: "September 18th 2024",
      description:
        "Reading and understanding the aspects of the Transformer Model from Google Brain",
      pathName: "/blog/code-splitting-i18n",
      readingTime: "5 min",
    },
    {
      slug: "new-beginnings",
      title: "Week 1-4: Introduction to Machine Learning with Linear Algebra, Calculus, Probability, and PyTorch",
      publishDate: "August 19th 2024",
      description:
        "Dedicated to learning how to building matrices, familizaring with PyTorch, and learning more about applicable math concepts",
      pathName: "/blog/code-splitting-i18n",
      readingTime: "5 min",
    },
  ];
  
  export const imgSrcs = {
    mobile:
      "https://res.cloudinary.com/dtshavwni/image/upload/v1680013098/home-illustration-small_wdsuej.webp",
    desktop:
      "https://res.cloudinary.com/dtshavwni/image/upload/v1680013101/home-illustration_vfanz6.webp",
  };