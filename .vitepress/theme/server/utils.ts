import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

export const noteCategories = (notes: any[]) => {
  if (notes.length < 1) return false

  const categories: string[] = notes.map((note: { frontmatter: { categories: any } }) => {
    if (note.frontmatter.categories) {
      return note.frontmatter.categories
    }
    return [] // set uncategoried notes with empty array
  })

  return [...new Set(categories.flat())]
}

export const estimatedReadingTime = (note: string) => {
  const wpm = 225 // words per minute
  const words = note.trim().split(/\s+/).length
  return Math.ceil(words / wpm)
}

export const getNoteDatetime = (datetime: string) => {
  dayjs.extend(customParseFormat)

  const time = dayjs(datetime, ["DD-MM-YYYY", "YYYY-MM-DD"], true).format("DD MMM YYYY")
  return time
}

export const getNotesByCategories = (notes: any[], category: string | undefined) => {
  if (!category) return ""

  const result = notes.filter((note) => {
    return note.frontmatter.categories && note.frontmatter.categories.includes(category)
  })
  return result
}
