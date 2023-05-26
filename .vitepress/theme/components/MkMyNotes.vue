<script setup lang="ts">
import Time from "../components/icons/Time.vue";
import Calendar from "../components/icons/Calendar.vue";

defineProps<{
  title?: string;
  description?: string;
  url?: string;
  date?: string;
  readingTime?: string;
}>();
</script>

<template>
  <div class="note_card">
    <a class="note" :href="url">
      <h2>{{ title }}</h2>
      <div v-if="description">
        <i>{{ description }}</i>
      </div>
      <div class="note_detail">
        <span>
          <Calendar style="height: 30px; width: 30px" />
          {{ date }}</span
        >
        <span>
          <Time style="height: 30px; width: 30px" />
          {{ readingTime }}</span
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
