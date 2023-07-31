<script setup lang="ts">
import MkMyNotes from "../components/MkMyNotes.vue"
import { useData } from "vitepress"

const { site, frontmatter } = useData()
</script>

<template>
  <div class="page-content">
    <div class="mk-intro">
      <h1 class="mk-title">{{ site.title }}</h1>
      <h2 class="mk-description">{{ site.description }}</h2>
      <p class="mk-intro-text">{{ frontmatter.introText }}</p>
      <div class="mk-button-container">
        <a
          class="mk-button primary"
          v-if="frontmatter.introButton?.primary"
          :href="frontmatter.introButton.primary.url"
        >
          {{ frontmatter.introButton.primary.text }}</a
        >
        <a
          class="mk-button secondary"
          v-if="frontmatter.introButton?.secondary"
          :href="frontmatter.introButton.secondary.url"
          >{{ frontmatter.introButton.secondary.text }}</a
        >
      </div>
    </div>
    <div class="recent-notes">
      <h2>Recent Notes</h2>
      <MkMyNotes :limit="frontmatter.notesLimit" />
    </div>
  </div>
</template>

<style scoped>
.mk-intro {
  max-width: 748px;
  padding: 4rem 6rem;
  margin-bottom: 4rem;
}

.mk-title {
  font-size: 3.5rem;
  margin: 0;
  color: var(--mk-color-primary);
}

.mk-description {
  font-size: 1.5rem;
  margin-top: 8px;
}

.mk-intro-text {
  font-size: 17px;
}

.mk-button-container {
  margin-top: 2.2rem;
}

.mk-button {
  display: inline-block;
  font-size: 17px;
  padding: 14px 22px;
  border-radius: 6px;
  text-decoration: none;
  margin-right: 0.8rem;
}

.mk-button.primary {
  background-color: var(--mk-color-primary);
  color: #f1fafe;
}

.mk-button.secondary {
  background-color: var(--mk-color-secondary);
  color: var(--mk-text-color);
}

.recent-notes {
  max-width: 1000px;
  margin: auto;
  padding: 0 1rem;
}

.recent-notes h2 {
  text-align: center;
}

@media screen and (max-width: 860px) {
  .mk-intro {
    padding: 3rem 1.2rem;
  }
  .mk-title {
    font-size: 2.5rem;
  }

  .mk-description {
    font-size: 1.2rem;
  }

  .mk-intro-text {
    font-size: 14px;
  }
}
</style>
