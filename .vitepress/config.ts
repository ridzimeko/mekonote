import { defineConfigWithTheme } from "vitepress"
import buildRSSFeed from "./rss"
import transformHeadTags from "./theme/server/head"

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: "Mekonote",
  description: "Simple and customizable static blog generator",
  head: [],
  themeConfig: {
    hostname: "https://example.com",
    favicon: "/favicon.svg",
    rssOptions: {
      language: "en", // optional, used only in RSS 2.0
      copyright: `${new Date().getFullYear()} Mekonote`,
      generator: "Mekonote",
    },
    author: {
      name: "blackycats",
      email: "meko@example.com",
      image: "/images/blackycats.jpg",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes" },
      { text: "Categories", link: "/category" },
      { text: "About", link: "/about" },
    ],
  },
  buildEnd: ({ userConfig }) => buildRSSFeed(userConfig),
  transformHead: (ctx) => transformHeadTags(ctx),
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["**/README.md"],
})
