import { Feed, type FeedOptions } from "feed";
import { writeFile, readFile } from "node:fs/promises";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import matter from "gray-matter";
import fg from "fast-glob";
import markdownIt from "markdown-it";

dayjs.extend(customParseFormat);

const baseurl: string = "example.com";

const author = {
  name: "blackycats",
  email: "meko@example.com",
  link: baseurl,
};

const options: FeedOptions = {
  title: "Mekonote",
  description: "Simple and customizable static blog generator",
  id: "https://example.com",
  link: "https://example.com/",
  language: "en", // optional, used only in RSS 2.0
  favicon: "http://example.com/favicon.ico",
  copyright: `${new Date().getFullYear()} Mekonote`,
  generator: "Mekonote",
  author: author,
};

async function buildRSSFeed() {
  const feed = new Feed(options);
  const posts: any = await generateRSS();

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
    });
  });

  writeFile(".vitepress/dist/feed.xml", feed.atom1());
}

async function generateRSS() {
  const files = await fg("notes/*.md");

  const markdown = new markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  const posts: any[] = await Promise.all(
    files
      .filter((i) => !i.includes("index"))
      .map(async (i) => {
        const raw = await readFile(i);
        const { data, content } = matter(raw);
        const html = markdown.render(content);

        return {
          ...data,
          date: dayjs(data.date, ["DD-MM-YYYY", "YYYY-MM-DD"]).toDate(),
          author: [author],
          content: html,
          link: `${baseurl}/${i.replace(".md", ".html")}`,
        };
      })
  );

  return posts;
}

export default buildRSSFeed;
