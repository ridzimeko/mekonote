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
    <div class="note--card" v-for="note of myNotes.slice(0, limit)" :key="note.url">
      <a class="note" :href="note.url">
        <div class="card-detail-1">
          <h3 class="card-title">{{ note.title }}</h3>
          <p class="card-description">
            <i>{{ note.description || "No description for this note" }}</i>
          </p>
        </div>
        <div class="card-detail-2">
          <p>
            <i class="ti ti-clock note-detail-icon"></i>
            {{ note.readingTime }} mins read
          </p>
          <p>
            <i class="ti ti-calendar-time note-detail-icon"></i>
            {{ note.date }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.note--card {
  position: relative;
  transition: 0.2s;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #d4d4d4;
  padding: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.note--card .note::before {
  transition: 0.2s;
  content: "";
  background-color: var(--brand-color-primary);
  width: 4px;
  position: absolute;
  left: -4px;
  height: 100%;
  opacity: 0;
  transform: translateX(-15px);
}

.note--card:hover .note::before {
  opacity: 1;
  transform: translateX(-10px);
}

.note {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
  color: var(--theme-text-light);
  transition: 0.2s;
}

.card-detail-1 {
  width: 520px;
}

.card-detail-2 {
  width: 250px;
  max-width: 300px;
  display: flex;
  gap: 15px;
  vertical-align: middle;
  color: rgb(34, 33, 33);
}

.card-detail-2 p {
  margin-top: 5px;
}

.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(66, 65, 65);
}
</style>
