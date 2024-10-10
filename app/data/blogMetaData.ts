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
      slug: "code-splitting-i18n",
      title: "Code Splitting i18n Locales Using Dynamic Imports",
      publishDate: "08 Jul 2022",
      description:
        "A quick article about how to leverage dynamic imports and code-split language.json files.",
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