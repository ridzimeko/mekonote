<script setup lang="ts">
import MkMyNotes from "../components/MkMyNotes.vue"
import { useData } from "vitepress"

const { site, frontmatter } = useData()
</script>

<template>
  <div class="page-content">
    <div class="mk-intro">
      <h1>{{ site.title }}</h1>
      <h3 class="mk-escription">{{ site.description }}</h3>
      <p>{{ frontmatter.introText }}</p>
      <div class="mk-button-container">
        <a
          class="mk-button primary"
          v-if="frontmatter.introButton.primary && frontmatter.introButton"
          :href="frontmatter.introButton.primary.url"
        >
          {{ frontmatter.introButton.primary.text }}</a
        >
        <a
          v-if="frontmatter.introButton.secondary && frontmatter.introButton"
          class="mk-button secondary"
          :href="frontmatter.introButton.secondary.url"
          >{{ frontmatter.introButton.secondary.text }}</a
        >
      </div>
    </div>
    <MkMyNotes :limit="frontmatter.notesLimit" class="recent-notes" />
  </div>
</template>

<style scoped>
.mk-intro {
  max-width: 768px;
  padding: 4rem 6rem;
  margin-bottom: 4rem;
}

.mk-intro h1 {
  font-size: 65px;
  margin: 0;
  color: var(--brand-color-primary);
}

.mk-intro h3 {
  font-size: 1.5rem;
  margin-top: 8px;
}

.mk-intro p {
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
  background-color: var(--brand-color-primary);
  color: white;
}

.mk-button.secondary {
  background-color: var(--theme-accent-light);
  color: var(--theme-text-light);
}

.recent-notes {
  max-width: 1000px;
  margin: auto;
  padding: 0 1.2rem;
}

@media screen and (max-width: 860px) {
  .mk-intro {
    padding: 3rem 1.2rem;
  }
  .mk-intro h1 {
    font-size: 3.1rem;
  }

  .mk-intro h3 {
    font-size: 1.3rem;
  }
}
</style>
