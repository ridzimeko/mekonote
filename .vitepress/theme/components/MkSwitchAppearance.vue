<script setup lang="ts">
import { onMounted, reactive } from "vue"

export type UserTheme = "light" | "dark" | "auto"

interface MkTheme {
  showMenu: boolean
  isDeviceDark: boolean
  currentTheme: null | string
}

const mkTheme = reactive<MkTheme>({
  showMenu: false,
  isDeviceDark: false,
  currentTheme: null,
})

const toggleButton = () => (mkTheme.showMenu = !mkTheme.showMenu)

function checkCurrentTheme() {
  if (!localStorage) return false

  const theme = localStorage.getItem("vitepress-theme-appearance")

  if (!theme) {
    mkTheme.currentTheme = "auto"
    localStorage.setItem("vitepress-theme-appearance", "auto")
  }

  mkTheme.currentTheme = theme
}

function switchTheme(theme: UserTheme) {
  mkTheme.currentTheme = theme

  if (theme === "dark" || (theme === "auto" && mkTheme.isDeviceDark)) {
    document.documentElement.classList.add("dark")
    return localStorage.setItem("vitepress-theme-appearance", theme)
  }

  document.documentElement.classList.remove("dark")
  localStorage.setItem("vitepress-theme-appearance", theme)
}

onMounted(() => {
  checkCurrentTheme()

  const mql = window.matchMedia("(prefers-color-scheme: dark)")

  mkTheme.isDeviceDark = mql.matches

  mql.addEventListener("change", (e) => {
    mkTheme.isDeviceDark = e.matches
    if (mkTheme.currentTheme === "auto") return switchTheme("auto")
  })
})
</script>

<template>
  <div class="theme-toggle">
    <button
      @click="toggleButton"
      type="button"
      aria-label="Toggle theme"
      aria-haspopup="menu"
      :aria-expanded="mkTheme.showMenu"
    >
      <i aria-hidden="true" class="ti ti-shadow"></i>
    </button>
    <div class="theme-menu" :class="{ show: mkTheme.showMenu }">
      <button
        @click="switchTheme('auto')"
        :aria-selected="mkTheme.currentTheme === 'auto'"
        type="button"
      >
        <i aria-hidden="true" class="ti ti-sun-moon"></i>
        System
      </button>
      <button
        @click="switchTheme('light')"
        :aria-selected="mkTheme.currentTheme === 'light'"
        type="button"
      >
        <i aria-hidden="true" class="ti ti-sun"></i>
        Light
      </button>
      <button
        @click="switchTheme('dark')"
        :aria-selected="mkTheme.currentTheme === 'dark'"
        type="button"
      >
        <i aria-hidden="true" class="ti ti-moon"></i>
        Dark
      </button>
    </div>
  </div>
  <div v-if="mkTheme.showMenu" @click="toggleButton" class="shadow"></div>
</template>

<style scoped>
.shadow {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  overflow: hidden;
}

.show {
  display: block;
}

.theme-toggle {
  position: relative;
  z-index: 100;
}

.theme-toggle .ti::before {
  font-size: 160%;
  vertical-align: middle;
}

:where(.theme-toggle, .theme-menu) > button {
  border: transparent;
  background-color: transparent;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: 0.2s;
  cursor: pointer;
}

.theme-menu {
  position: absolute;
  top: 36px;
  right: 0px;
  background-color: var(--mk-theme-color);
  min-width: 120px;
  border-radius: 6px;
  padding: 6px 0;
  margin: 0;
  transition: transform 0.08s linear, opacity 0.08s ease-out, visibility 0.08s;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.9);
  overflow: hidden;
}

.theme-menu.show {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transform-origin: top center;
}

.theme-menu .ti::before {
  font-size: 128%;
  vertical-align: bottom;
  margin-right: 6px;
}

.theme-menu > button {
  display: block;
  white-space: nowrap;
  padding: 8px 16px;
  width: 100%;
  text-align: left;
}

.theme-menu > button:hover {
  background-color: var(--mk-color-accent);
}

.theme-menu > button[aria-selected="true"] {
  background-color: var(--mk-color-accent);
}
</style>
