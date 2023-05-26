<script setup>
import { data as notes } from "../server/post.data.js";
import Time from "./icons/Time.vue";
import Calendar from "./icons/Calendar.vue";
</script>

<template>
  <div class="hero--container">
    <h2>Catatan yang baru dipublish :</h2>
    <div class="card-container">
      <a :href="note.url" class="note--card" v-for="note of notes.slice(0, 5)">
        <h2 class="note_title">{{ note.title }}</h2>
        <div class="note--detail">
          <p class="note_description">
            {{ note.content.slice(0, 250) }}
          </p>
          <div class="note_datetime">
            <span>
              <Time style="width: 30px; height: 30px" />
              {{ note.readingTime }}
            </span>
            <br />
            <span>
              <Calendar style="width: 30px; height: 30px" />
              {{ note.date }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.hero--container {
  padding: 10px var(--padding-body);
}

.card-container,
.hero--container {
  display: grid;
  place-items: center;
  padding: 0 1rem;
}

.note--card {
  color: black;
  width: 70%;
  text-decoration: none;
  margin-top: 1rem;
  border-bottom: 1px solid;
}

.note--card:hover .note_title {
  text-decoration: underline;
}


.note--detail {
  display: flex;
  gap: 2rem;
}

.note_title {
  margin: 0;
}

.note_description {
  max-width: 65%;
  margin-right: auto;
}

.note_datetime {
  margin-right: 2rem;
}

.badge--container {
  /* display: flex; */
  /* flex-direction: row-reverse; */
  flex-direction: column-reverse;
}
.badge--text {
  margin-right: 14px;
  padding: 0.2rem;
  border-radius: 5px;
  background-color: #bbbbbb;
}

@media (max-width: 860px) {
  .note--card {
    width: inherit;
  }

  .note--detail {
    flex-direction: column-reverse;
    gap: 0;
  }

  .note_description {
    max-width: 100%;
  }

  .note_datetime {
    display: flex;
    gap: 0.2rem;
    font-size: 14px;
  }
}
</style>
