<script setup>
import { useData, useRoute } from "vitepress"
import { inject } from "vue"
import Close from "./icons/Close.vue"

const { theme } = useData()
const route = useRoute()
const isOpen = inject("showNavbar")

const closeSidebar = (item) => {
  if (item === route.path) return

  isOpen.value = !isOpen.value
}
</script>

<template>
  <aside class="sidebar" :class="{ open: isOpen }">
    <Close @click="closeSidebar" style="cursor: pointer" class="close-button" />
    <a
      v-for="(item, i) in theme.nav"
      @click="closeSidebar(item.link)"
      class="sidebar-items"
      :href="item.link"
      :key="i"
    >
      <p :class="{ active: item.link === route.path }">{{ item.text }}</p>
    </a>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  z-index: 15;
  right: 0;
  top: 0;
  background-color: var(--theme-color-light);
  padding: 80px 20px 20px 40px;
  width: calc(100vh - 200px);
  max-width: 320px;
  height: 100vh;
  overflow-y: scroll;
  transform: translateX(100%);
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.open {
  transform: translateX(0);
}

.sidebar-items {
  text-decoration: none;
}

.sidebar-items p {
  padding: 0.8em;
  border-radius: var(--rounded-border);
  color: var(--theme-text-light);
}

.sidebar-items p:hover,
.active {
  background-color: var(--theme-accent-light);
}

.close-button {
  position: fixed;
  top: 0;
  right: 5px;
}
</style>
