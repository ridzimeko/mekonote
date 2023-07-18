// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue"
import "./styles/custom-block.css"
import "./styles/style.css"
import "@tabler/icons-webfont/tabler-icons.min.css"
import "./styles/code.css"

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
