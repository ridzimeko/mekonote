<script setup lang="ts">
import { ref } from "vue"
import { noteCategories } from "../server/utils"
import { data as notes } from "../server/post.data"
import MkMyNotes from "../components/MkMyNotes.vue"

const selectedCategory = ref("")
const allCategories = noteCategories(notes)

const getNoteFromCategory = (category: string) => {
  selectedCategory.value = category
}
</script>

<template>
  <div class="cardContainer">
    <button
      v-for="category of allCategories"
      class="categoryCard"
      type="button"
      :aria-pressed="category === selectedCategory"
      @click="getNoteFromCategory(category)"
    >
      {{ category }}
    </button>
  </div>

  <MkMyNotes
    v-if="selectedCategory"
    :category="selectedCategory"
    style="margin-top: 4.4rem"
  />
</template>

<style scoped>
.cardContainer {
  display: flex;
  gap: 30px;
  margin: 2rem 0 1rem;
  overflow: scroll;
}
.categoryCard {
  padding: 12px 20px;
  border-radius: 9px;
  color: var(--mk-text-color);
  text-decoration: none;
  background-color: var(--mk-mute-dark);
  border: none;
  white-space: nowrap;
}

button[aria-pressed="true"] {
  background-color: var(--mk-color-primary);
  color: #f1fafe;
  transition: all 0.2s;
}

@media screen and (max-width: 820px) {
  .container {
    padding: 0;
  }
}
</style>
