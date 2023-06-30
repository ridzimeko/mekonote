<script setup lang="ts">
import { ref } from "vue"
import { noteCategories } from "../server/utils"
import { data as notes } from "../server/post.data"
import MkMyNotes from "../components/MkMyNotes.vue"

const selectedCategory = ref("")
const categories = noteCategories(notes)

const getNoteFromCategory = (category: string) => {
  selectedCategory.value = category
}
</script>

<template>
  <div class="cardContainer">
    <button
      v-for="category of categories"
      class="categoryCard"
      :class="{ active: category === selectedCategory }"
      @click="getNoteFromCategory(category)"
    >
      {{ category }}
    </button>
  </div>

  <div class="container">
    <MkMyNotes v-if="selectedCategory" :category="selectedCategory" />
  </div>
</template>

<style scoped>
.container {
  padding: 1rem 6rem;
}
.cardContainer {
  display: flex;
  gap: 30px;
  margin: 2rem 0 1rem;
  overflow: scroll;
}
.categoryCard {
  padding: 12px 20px;
  border-radius: 9px;
  color: var(--theme-text-light);
  text-decoration: none;
  background-color: var(--theme-color-light);
  border: none;
  white-space: nowrap;
}

.active {
  background-color: var(--brand-color-primary);
  color: var(--theme-text-dark);
  transition: all 0.2s;
}

@media screen and (max-width: 820px) {
  .container {
    padding: 0;
  }
}
</style>
