# Mekonote - A Simple and Customizable Blog Made with Vitepress

Mekonote is a simple, easy and customizable blog. It's built with Vitepress, a fast tool that helps you create static websites.

## What You Need

Before you start, make sure you have the following things:

- Node.js (v16 or above)
- npm (Node Package Manager) or other package manager like pnpm or yarn

## Getting Started

1. Clone this repository

```bash
git clone https://github.com/ridzimeko/mekonote
```

2. Go into the project folder:

```bash
cd mekonote
```

4. Install the necessary files:

```bash
npm install
```

## Customizing Your Blog

Mekonote is a flexible blog that you can customize to fit your style.

- **Layouts**: You can change how your blog looks by modifying the Vue components in the `.vitepress/theme` folder.

- **Styling**: If you want to change the colors or fonts, you can edit the CSS files in the `.vitepress/theme/styles.css` folder.

- **Configuration**: To adjust settings like the blog's title, description, or navigation links, you can modify the `.vitepress/config.ts` file. For RSS setting you can go to `.vitepress/rss.ts`

If you want to do more advanced customization, you can refer to the [Vitepress](https://vitepress.dev/docs) documentation.

## Creating Content

To add new blog posts to Mekonote, follow these simple steps:

1. Go to the `notes` folder and create a new file with the `.md` extension. For example, `my-first-note.md`.

2. Open the new file and add some information at the top. This is called the front matter and it's like a summary of your post. You can include the title, date, and categories. Here's an example:

```markdown
---
title: My First Post
date: 2023-05-25 
image: /images/my-photo.jpg
categories:
  - tutorial
  - mekonote
---

# My First Post

Welcome to my first blog post!
```

**Note**: every post must contain `title` and `date` frontmatter

You can also use vue component with the `.md` extension to extend your blog functionality. More info [here](https://vitepress.dev/guide/using-vue#using-vue-in-markdown)

### Available frontmatters
**title**: title of your post <br>
**description**: description of your post <br>
**date**: date syntax `[YYYY-MM-DD, DD-MM-YYYY]` <br>
**categories**: sort and group your blog posts into different sections <br>
**image**: attach image to your post for thumbnail <br>
**altText**: alternative text for image thumbnail

To see a preview of your post, run `npm run dev` in terminal


## Deploying Mekonote

### Deploying to Nginx

1. Build your Mekonote project:

```bash
npm run build
```
or other package manager e.g pnpm
```bash
pnpm build
```

2. Copy the generated files from the `.vitepress/dist` folder to your Nginx server.

3. Configure Nginx to serve the Mekonote files, for basic configuration copy this to Nginx config
```bash
server_name example.com;
  root /your-blog-directory;
  rewrite ^/(.*)/$ /$1 break; #remove trailing slash

  location / {
    try_files $uri $uri/index.html $uri.html =404;
  }

  location /assets {
    add_header Cache-Control "max-age=31536000,immutable";
  }

  error_page 404 /404.html;
```

4. Restart Nginx, and now your blog should be live!

### Deploying to Github Pages 

See the vitepress documentation on how to deploy mekonote to Github pages or Gitlab pages.

https://vitepress.dev/guide/deploy#deploy-your-vitepress-site
