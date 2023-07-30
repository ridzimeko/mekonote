<script setup>
import { useData } from "vitepress"
import { getNoteDatetime } from "../server/utils"

const { theme } = useData()
</script>

<template>
  <div v-if="!$frontmatter.layout" :class="{ 'note-container': !$frontmatter.layout }">
    <div class="note-header">
      <h1 class="note-title">{{ $frontmatter.title || "Untitled Notes" }}</h1>
      <div class="author-container">
        <div class="author-item">
          <img
            loading="eager"
            class="author-image"
            :src="theme.author.image"
            :alt="theme.author.name"
            :title="theme.author.name"
          />
          <span class="author-name">{{ theme.author.name }}</span>
        </div>
        <p class="note-date">
          <i class="ti ti-calendar-time note-date-icon"></i
          >{{ getNoteDatetime($frontmatter.date) }}
        </p>
      </div>
      <p class="note-description">
        <i>{{ $frontmatter.description }}</i>
      </p>
      <img
        loading="eager"
        class="note-image"
        :src="$frontmatter.image"
        :alt="$frontmatter.altImg"
        :title="$frontmatter.altImg"
      />
    </div>

    <Content class="note-content" />
  </div>

  <Content v-else class="page-content" />
</template>

<style>
.note-container {
  max-width: clamp(300px, 90vw, 760px);
  padding: 0 1.2rem;
  margin: auto;
}

:where(.page-content, .note-content) {
  font-size: clamp(1rem, 2svw, 1.06rem);
  line-height: 1.4;
}

:where(.note-content, .page-content) img {
  width: 80%;
  display: block;
  margin: auto;
  object-fit: contain;
}

:where(.note-content, .page-content, .about-content) a[target="_blank"]::after {
  content: "\ea99";
  margin-left: 1px;
  position: relative;
  top: 1px;
}

/* Note header style */

.note-header {
  text-align: center;
  margin-top: 5em;
  margin-bottom: 3em;
}

.author-image {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

.author-item {
  display: flex;
  align-items: center;
  gap: 0 10px;
}

.author-item::after {
  content: "\f671";
  font-size: 8px;
}

.author-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.author-name {
  font-size: 18px;
}

.note-title {
  margin: 0 0 10px;
  font-size: clamp(2.2rem, 5vw, 2.6rem);
}

.note-image {
  display: block;
  margin: 2rem auto;
  width: 100%;
  object-fit: contain;
}

.note-description {
  font-size: 19px;
  color: grey;
  text-align: left;
  margin: 1rem 0 0;
}

.note-date-icon {
  margin-right: 6px;
  font-size: 1.2rem;
  vertical-align: text-bottom;
}

/* Hyperlinks */

a {
  color: var(--mk-color-link);
  text-decoration: none;
}

:where(.note-content, .page-content) a:hover {
  text-decoration: underline;
}
</style>
