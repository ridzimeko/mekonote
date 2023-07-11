// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue"
import "./style.css"
import "@tabler/icons-webfont/tabler-icons.min.css"

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
