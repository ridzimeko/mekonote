<script setup lang="ts">
import Time from "../components/icons/Time.vue"
import Calendar from "../components/icons/Calendar.vue"
import { data as notes } from "../server/post.data"
import { getNotesByCategories } from "../server/utils"
import { computed } from "vue"

const props = defineProps<{
  limit?: number
  category?: string
}>()

const myNotes = computed(() => {
  if (props.category) return getNotesByCategories(notes, props.category)
  return notes
})
</script>

<template>
  <div class="note_card" v-for="note of myNotes.slice(0, limit)" :key="note.url">
    <a class="note" :href="note.url">
      <h2>{{ note.title }}</h2>
      <div v-if="note.description">
        <i>{{ note.description }}</i>
      </div>
      <div class="note_detail">
        <span>
          <Calendar style="height: 30px; width: 30px" />
          {{ note.date }}</span
        >
        <span>
          <Time style="height: 30px; width: 30px" />
          {{ note.readingTime }} menit waktu baca</span
        >
      </div>
    </a>
    <hr />
  </div>
</template>

<style scoped>
.note {
  text-decoration: none;
  color: var(--theme-text-light);
  line-height: 17px;
}

.note_card {
  transition: 0.2s;
}

.note_card:hover {
  border-left: solid var(--brand-color-primary);
  padding-left: 10px;
}

.note_detail {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}
</style>
