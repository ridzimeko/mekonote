<script setup lang="ts">
import { useData } from "vitepress";
import MkNavbar from "./components/MkNavbar.vue";
import Mk404 from "./components/Mk404.vue";
import MkViewNote from "./components/MkViewNote.vue";
import MkFooter from "./components/MkFooter.vue";
import MkSidebar from "./components/MkSidebar.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import { ref, provide } from "vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData();

const isOpen = ref(false);
provide('showNavbar', isOpen)

const toggleSidebar = () => {
  isOpen.value = !isOpen.value; // Toggle the sidebar state
};
</script>

<template>
    <Mk404 v-if="page.isNotFound" />
    <div v-else class="layout">
      <MkNavbar @toggle-sidebar="toggleSidebar" />
      <MkSidebar />
      <Home v-if="frontmatter.home" />
      <About v-else-if="frontmatter.layout === 'about'" />
      <MkViewNote v-else class="flex-grow" />
      <MkFooter />
    </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.flex-grow {
  flex: 1;
}
</style>
