<script setup lang="ts">
import { data as notes } from "../server/post.data"
import { getNotesByCategories } from "../server/utils"
import { computed } from "vue"

interface Props {
  limit?: number
  category?: string
}

const props = withDefaults(defineProps<Props>(), {
  // limit: 10,
})

const myNotes = computed(() => {
  if (props.category) return getNotesByCategories(notes, props.category)
  return notes
})
</script>

<template>
  <div class="notes">
    <a
      class="note--card"
      v-for="note of myNotes.slice(0, limit)"
      :key="note.url"
      :href="note.url"
    >
      <div class="card-detail-1">
        <h3 class="card-title">{{ note.title }}</h3>
        <p class="card-description">
          <i>{{ note.description || "No description for this note" }}</i>
        </p>
      </div>
      <div class="card-detail-2">
        <span>
          <i class="ti ti-clock note-detail-icon"></i>
          {{ note.readingTime }} mins read
        </span>
        <span class="note-date">
          <i class="ti ti-calendar-time note-detail-icon"></i>
          {{ note.date }}
        </span>
      </div>
    </a>
  </div>
</template>

<style scoped>
.note--card {
  display: block;
  position: relative;
  text-decoration: none;
  padding: 1rem 1.2rem;
  color: var(--mk-text-color);
  margin-bottom: 20px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: var(--mk-theme-color);
}

.note--card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -4px;
  transition: 0.2s;
  background-color: var(--mk-color-primary);
  width: 4px;
  height: 100%;
  opacity: 0;
  transform: translateX(-15px);
}

.note--card:hover::before {
  opacity: 1;
  transform: translateX(-10px);
}

.card-detail-2 {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--mk-text-color);
}

.card-title,
.note-date {
  margin: 0;
}

.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--mk-text-color-mute);
  margin-top: 12px;
}
</style>
