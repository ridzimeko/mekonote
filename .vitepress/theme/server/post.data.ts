import { createContentLoader } from "vitepress"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { getNoteDatetime, estimatedReadingTime } from "./utils"

dayjs.extend(customParseFormat)

interface Notes {
  title: string
  description: string | undefined
  frontmatter: any
  excerpt: string | undefined
  date: string
  readingTime: number
  url: string
}

declare const data: Notes[]
export { data }

export default createContentLoader("notes/*.md", {
  includeSrc: true,
  excerpt: true,
  transform(rawData): Notes[] {
    return rawData
      .filter((note) => {
        return note.frontmatter.date
      })
      .sort((a, b) => {
        return (
          +dayjs(b.frontmatter.date, ["DD-MM-YYYY", "YYYY-MM-DD"]) -
          +dayjs(a.frontmatter.date, ["DD-MM-YYYY", "YYYY-MM-DD"])
        )
      })
      .map(({ src, frontmatter, url, excerpt }) => ({
        title: frontmatter.title || "Untitled Notes",
        description: frontmatter.description,
        frontmatter: frontmatter,
        excerpt: excerpt,
        date: getNoteDatetime(frontmatter.date),
        readingTime: estimatedReadingTime(src ?? ""),
        url: url,
      }))
  },
})
