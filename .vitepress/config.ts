import { defineConfigWithTheme } from "vitepress"
import buildRSSFeed from "./rss"

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: "Mekonote",
  description: "Simple and customizable static blog generator",
  head: [],
  themeConfig: {
    hostname: "https://example.com",
    favicon: "/favicon.svg",
    RssOptions: {
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
      { text: "Beranda", link: "/" },
      { text: "Catatan", link: "/notes" },
      { text: "Kategori", link: "/category" },
      { text: "Tentang", link: "/about" },
    ],
  },
  buildEnd: ({ userConfig }) => buildRSSFeed(userConfig),
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["**/README.md"],
})
