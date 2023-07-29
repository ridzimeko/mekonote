<script setup lang="ts">
import { useData } from "vitepress"
import pkg from "../../../package.json"

const { site } = useData()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <p>&copy; {{ currentYear }} {{ site.title }}</p>
    <p>
      Powered by <a href="https://github.com/ridzimeko/mekonote">Mekonote</a> 
      v{{ pkg.version }} licensed under GPL-3.0
    </p>
  </footer>
</template>

<style>
footer {
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 0;
  font-size: 0.85rem;
}
</style>
