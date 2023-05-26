<script setup>
import { ref } from "vue";
import { data as notes } from "../server/post.data";
import { noteCategories, viewCategory } from "../server/utils";
import MkMyNotes from "../components/MkMyNotes.vue";

const selectedCategory = ref(null);
const filteredNotes = ref(null);

const categories = noteCategories(notes);

const getNoteFromCategory = (category) => {
  selectedCategory.value = null;
  const res = viewCategory(notes, category);
  filteredNotes.value = res;
  selectedCategory.value = category;
};
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
    <MkMyNotes
      v-for="(note, i) in filteredNotes"
      :key="i"
      :title="note.title"
      :description="note.frontmatter.description"
      :date="note.date"
      :readingTime="note.readingTime"
      :url="note.url"
    />
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
