import { HeadConfig, TransformContext } from "vitepress"

function transformHeadTags(ctx: TransformContext) {
  const { head, pageData, siteData, title, description, page } = ctx
  const { base, themeConfig } = siteData
  let pageImage: string = pageData.frontmatter?.image

  if (pageImage) {
    pageImage = pageImage.match(/^https?/)
      ? pageImage
      : themeConfig.hostname + base + pageImage.replace(/^\.?\//, "")
  }

  const headTags: HeadConfig[] = [
    ["meta", { name: "og:title", content: title }],
    ["meta", { name: "og:description", content: description }],
    ["meta", { name: "og:site_name", content: siteData.title }],
    ["meta", { name: "og:image", content: pageImage }],
    [
      "meta",
      {
        name: "og:type",
        content:
          pageData.frontmatter?.home || pageData.frontmatter?.layout
            ? "website"
            : "article",
      },
    ],
    [
      "meta",
      {
        name: "og:url",
        content: themeConfig.hostname + base + page.replace(".md", ".html"),
      },
    ],
    /* Due to twitter changed their new brand I wonder if these meta tags is still applicable in the future */
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:description", content: description }],
    ["meta", { name: "twitter:image", content: pageImage }],
    [
      "meta",
      { name: "twitter:card", content: pageImage ? "summary_large_image" : "summary" },
    ],
    [
      "link",
      {
        rel: "alternate",
        type: "application/atom+xml",
        title: siteData.title,
        href: themeConfig.hostname + base + "feed.xml",
      },
    ],
  ]

  head.push(
    ...headTags.filter((header) => {
      if (header[1].name == "og:image" || header[1].name == "twitter:image") {
        return header[1].content
      }
      return true
    })
  )
}

export default transformHeadTags
