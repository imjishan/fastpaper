import { data_fetching_article } from "./articles/data-fetching";
import { html_article_rendering } from "./articles/html-redering";
export const blogs = [
  {
    id: 0,
    name: "rendering articles using html",
    description: "learn how to render a blog using html",
    title: "Rendering Articles using HTML",
    slug: "rendering-blog-html",
    created_at: new Date("8/7/2024").toLocaleString(),
    link: "/blog/rendering-blog-html",
    article: html_article_rendering,
    image: "https://utfs.io/f/05f9572b-60e1-4085-9634-aa91494b72a4-3s2kwh.png",
    keywords: [],
  },
  {
    id: 1,
    name: "data fetching in nextjs 14",
    description: "learn how to be fetch data in nextjs 14",
    title: "Data Fetching In Nextjs 14",
    slug: "nextjs-data-fetch",
    created_at: new Date("8/1/2024").toLocaleString(),
    link: "/blog/nextjs-data-fetch",
    article: data_fetching_article,
    image: "https://utfs.io/f/db400086-1ef0-4a18-9941-6b398789d65d-u8tcx6.png",
    keywords: [],
  },
  {
    id: 1,
    name: "Changing Fonts in Next.js 14 Project",
    description: "Learn how to change fonts in your Next.js 14 project.",
    title: "Changing Fonts in Next.js 14",
    slug: "changing-fonts-nextjs",
    created_at: new Date("8/9/2024").toLocaleString(),
    link: "/blog/changing-fonts-nextjs",
    article: changing_fonts_article,
    image: "",
    keywords: ["fonts", "Next.js", "CSS"],
  }
];
