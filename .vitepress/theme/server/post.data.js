import { createContentLoader } from "vitepress";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { getNoteDatetime, estimatedReadingTime } from "./utils";

dayjs.extend(customParseFormat);

export default createContentLoader("notes/*.md", {
  includeSrc: true,
  excerpt: true,
  transform(rawData) {
    return rawData
      .filter((note) => {
        return note.frontmatter.date;
      })
      .sort((a, b) => {
        return (
          +dayjs(b.frontmatter.date, ["DD-MM-YYYY", "YYYY-MM-DD"]) -
          +dayjs(a.frontmatter.date, ["DD-MM-YYYY", "YYYY-MM-DD"])
        );
      })
      .map((note) => ({
        title: note.frontmatter.title || "Untitled Notes",
        frontmatter: note.frontmatter,
        excerpt: note.excerpt,
        date: getNoteDatetime(note.frontmatter.date),
        readingTime: estimatedReadingTime((note.src)),
        url: note.url,
        content: note.src
        .split("---")[2]
        .split(/<end ?\/>/)[0]
        .replace("#", "") // remove title
        .replace(/\n+/g, " ") // remove line breaks
        .trim(),
      }));
  },
});
