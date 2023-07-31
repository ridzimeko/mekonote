<script setup lang="ts">
import { useData, useRoute } from "vitepress"
import MkSwitchAppearance from "./MkSwitchAppearance.vue"
import { inject } from "vue"

const emit = defineEmits(["toggle-sidebar"])

const toggleSidebar = () => {
  emit("toggle-sidebar") // Emit an event to trigger the sidebar toggle
}

const isNavbarOpen: boolean | undefined = inject("showNavbar")

const { site, theme, frontmatter } = useData()
const route = useRoute()
</script>

<template>
  <nav :class="frontmatter.coverImage ? 'nav-shadow' : null">
    <h2>
      <a class="nav-title" href="/">{{ site.title }}</a>
    </h2>
    <div class="nav-list">
      <a
        v-for="(navItem, index) in theme.nav"
        class="nav-items"
        :class="{ active: route.path === navItem.link }"
        :href="navItem.link"
        :key="index"
        >{{ navItem.text }}</a
      >
      <MkSwitchAppearance />
      <i
        @click="toggleSidebar"
        class="nav-menu ti ti-menu-deep"
        role="button"
        aria-label="Navbar"
        aria-haspopup="menu"
        :aria-expanded="isNavbarOpen"
      ></i>
    </div>
  </nav>
</template>

<style>
nav {
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 25px;
  z-index: 10;
  box-shadow: 0 -5px 8px black;
}

nav a {
  color: var(--mk-text-color);
  text-decoration: none;
}

.nav-shadow {
  box-shadow: inset 10px 0 160px black;
}

.nav-shadow :where(.nav-title, .nav-items, .ti-shadow) {
  color: #eef0f6;
}

.nav-menu {
  display: none;
  cursor: pointer;
  font-size: 165%;
}

.nav-list {
  display: flex;
  gap: 1rem;
  margin-left: auto;
  align-items: center;
}

.nav-items {
  position: relative;
  font-size: 17px;
}

.nav-items::after {
  opacity: 0;
  content: "";
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: -5px;
  left: 0;
  transform-origin: bottom left;
  transition: all 0.2s ease-out;
  background-color: var(--mk-color-primary);
}

.nav-items:hover::after,
.active::after {
  opacity: 1;
}

@media (max-width: 820px) {
  .nav-shadow {
    box-shadow: none;
  }

  .nav-items {
    display: none;
  }

  .nav-shadow a:only-child {
    color: var(--mk-text-color);
  }

  .nav-menu {
    display: block;
  }
}
</style>
