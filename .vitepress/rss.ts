import { Feed, type FeedOptions } from "feed"
import { type UserConfig } from "vitepress"
import { writeFile, readFile } from "node:fs/promises"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import matter from "gray-matter"
import fg from "fast-glob"
import markdownIt from "markdown-it"

dayjs.extend(customParseFormat)

async function buildRSSFeed(RSSConfig: UserConfig) {
  const { favicon, hostname, author, rssOptions } = RSSConfig.themeConfig

  const options: FeedOptions = {
    title: RSSConfig.title,
    description: RSSConfig.description,
    favicon: hostname + favicon,
    id: hostname,
    link: hostname,
    author: author,
    ...rssOptions,
  }
  const feed = new Feed(options)
  const posts = await generateRSS(RSSConfig)

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.link,
      link: post.link,
      description: post.description,
      content: post.content,
      author: post.author,
      date: post.date,
      image: post.image,
    })
  })

  writeFile(".vitepress/dist/feed.xml", feed.atom1())
}

async function generateRSS(RSSConfig: UserConfig) {
  const files: string[] = await fg("notes/*.md")

  const markdown = new markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })

  const posts: any[] = await Promise.all(
    files
      .filter((i) => !i.includes("index")) // exclude index.md
      .map(async (i) => {
        const raw = await readFile(i)
        const { data, content } = matter(raw)
        const html = markdown.render(content)

        return {
          ...data,
          date: dayjs(data.date, ["DD-MM-YYYY", "YYYY-MM-DD"]).toDate(),
          author: [RSSConfig.themeConfig.author],
          content: html,
          link: `${RSSConfig.themeConfig.hostname}/${i.replace(".md", ".html")}`,
        }
      })
  )

  return posts
}

export default buildRSSFeed
