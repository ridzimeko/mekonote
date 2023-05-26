<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import Menu from "./icons/Menu.vue";
import MkSwitchAppearance from "./MkSwitchAppearance.vue";

const emit = defineEmits(["toggle-sidebar"]);

const toggleSidebar = () => {
  emit("toggle-sidebar"); // Emit an event to trigger the sidebar toggle
};

const { site, theme, frontmatter } = useData();
const route = useRoute();
</script>

<template>
  <nav :class="frontmatter.coverImage ? 'nav-shadow' : null">
    <h2>
      <a href="/">{{ site.title }}</a>
    </h2>
    <ul class="nav-list">
      <li
        v-for="(navItem, index) in theme.nav"
        class="nav-items"
        :class="{ active: route.path === navItem.link }"
      >
        <a class="text-shadow" :href="navItem.link" :key="index">{{
          navItem.text
        }}</a>
      </li>
      <Menu
        @click="toggleSidebar"
        style="width: 40px; height: 40px; stroke-width: 2px"
        class="nav-menu"
      />
    </ul>
    <!-- TODO: make dark mode and light mode switch -->
    <!-- <RmSwitchAppearance /> -->
  </nav>
</template>

<style scoped>
nav {
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 25px;
  z-index: 10;
  box-shadow: 0 -5px 8px black;
}

.nav-menu {
  display: none;
  cursor: pointer;
}

.nav-list {
  display: flex;
  margin-left: auto;
}

.nav-items {
  position: relative;
  list-style: none;
  margin-right: 1.2rem;
}

.nav-items a {
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
  background-color: var(--brand-color-primary);
}

.nav-items:hover::after,
.active::after {
  opacity: 1;
}

nav a:only-child {
  color: var(--theme-text-light);
  text-decoration: none;
}

.nav-shadow {
  box-shadow: inset 10px 0 100px black;
}

.text-shadow {
  color: white;
}

.nav-shadow a:only-child {
  color: white;
}

.nav-shadow .nav-list .nav-items::after {
  background-color: var(--theme-accent-light);
}

@media (max-width: 820px) {
  .nav-shadow {
    box-shadow: none;
  }

  .nav-items {
    display: none;
  }

  .nav-shadow a:only-child {
    color: var(--theme-text-light);
  }

  .nav-menu {
    display: block;
  }
}
</style>
