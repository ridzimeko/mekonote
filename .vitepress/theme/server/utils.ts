import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/id";

export const noteCategories = (notes) => {
  const tempArray: string[] = [];

  if (!notes.length) return;

  notes.forEach((note) => {
    if (note.frontmatter.categories != null) {
      tempArray.push(note.frontmatter.categories);
    }
  });

  const categories = [...new Set(tempArray.flat())];

  return categories;
};

export const estimatedReadingTime = (note: string) => {
  const wpm = 225; // words per minute
  const words = note.trim().split(/\s+/).length;
  return Math.ceil(words / wpm) + " menit waktu baca";
};

export const getNoteDatetime = (datetime: string) => {
  dayjs.extend(customParseFormat);

  const time = dayjs(datetime, ["DD-MM-YYYY", "YYYY-MM-DD"], "id", true).format("DD MMMM YYYY");
  return time;
};

export const viewCategory = (notes, category: string) => {
  const result = notes.filter((note) => {
    return (
      note.frontmatter.categories &&
      note.frontmatter.categories.includes(category)
    );
  });
  return result;
};
