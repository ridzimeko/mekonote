import { defineConfigWithTheme } from "vitepress";
import buildRSSFeed from "./rss";

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: "Mekonote",
  description: "Simple and customizable static blog generator",
  head: [
    [
      "link",
      {
        type: "application/rss+xml",
        title: "Subscribe to Mekonote",
        href: "https://example.com/feed.xml",
      },
    ],
  ],
  themeConfig: {
    author: "blackycats",
    authorImage: "/images/blackycats.jpg",
    nav: [
      { text: "Beranda", link: "/" },
      { text: "Catatan", link: "/notes" },
      { text: "Kategori", link: "/category" },
      { text: "Tentang", link: "/about" },
    ],
  },
  buildEnd: () => buildRSSFeed(),
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["**/README.md"],
});
