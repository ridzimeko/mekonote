<script setup lang="ts">
import MkMyNotes from "../components/MkMyNotes.vue"
import { useData } from "vitepress"

const { site, frontmatter } = useData()
</script>

<template>
  <div class="Mk--title margin-body">
    <h1>{{ site.title }}</h1>
    <h3 class="intro_description">{{ site.description }}</h3>
    <p>{{ frontmatter.introText }}</p>
    <div class="introButton-container">
      <a
        class="intro_button primary"
        v-if="frontmatter.introButton.primary && frontmatter.introButton"
        :href="frontmatter.introButton.primary.url"
      >
        {{ frontmatter.introButton.primary.text }}</a
      >
      <a
        v-if="frontmatter.introButton.secondary && frontmatter.introButton"
        class="intro_button secondary"
        :href="frontmatter.introButton.secondary.url"
        >{{ frontmatter.introButton.secondary.text }}</a
      >
    </div>
  </div>
  <MkMyNotes :limit="frontmatter.notesLimit" />
</template>

<style scoped>
.Mk--title {
  max-width: 840px;
  padding: 3rem 1rem;
}

.Mk--title h1 {
  font-size: 65px;
  margin: 0;
  color: var(--brand-color-primary);
}

.Mk--title h3 {
  font-size: 1.5rem;
  margin-top: 8px;
}

.Mk--title p {
  font-size: 17px;
}

.introButton-container {
  margin-top: 2.2rem;
}

.intro_button {
  display: inline-block;
  font-size: 17px;
  padding: 14px 22px;
  border-radius: 6px;
  text-decoration: none;
  margin-right: 0.8rem;
}

.intro_button.primary {
  background-color: var(--brand-color-primary);
  color: white;
}

.intro_button.secondary {
  background-color: var(--theme-accent-light);
  color: var(--theme-text-light);
}

@media screen and (max-width: 860px) {
  .Mk--title h1 {
    font-size: 3.1rem;
    margin: 0;
  }

  .Mk--title h3 {
    font-size: 1.3rem;
  }
}
</style>
