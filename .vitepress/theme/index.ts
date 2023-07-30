// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue"
import "./styles/custom-block.css"
import "./styles/style.css"
import "./styles/code.css"
import "@tabler/icons-webfont/tabler-icons.min.css"
import "@fontsource-variable/inter"

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
