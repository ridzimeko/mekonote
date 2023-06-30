<script setup>
import { useData } from "vitepress"
import { getNoteDatetime } from "../server/utils"

const { theme } = useData()
</script>

<template>
  <div v-if="!$frontmatter.layout" :class="{ 'note-content': !$frontmatter.layout }">
    <div class="content-header">
      <h1 class="note-title">{{ $frontmatter.title || "Untitled Notes" }}</h1>
      <div class="authorDiv">
        <div class="author-item">
          <img
            loading="lazy"
            class="author-image"
            :src="theme.author.image"
            :alt="theme.author.name"
            :title="theme.author.name"
          />
          <span class="author-name">{{ theme.author.name }}</span>
          <span>|</span>
        </div>
        <p class="note-date">{{ getNoteDatetime($frontmatter.date) }}</p>
      </div>
      <p class="description">
        <i>{{ $frontmatter.description }}</i>
      </p>
      <img
        loading="lazy"
        class="note-image"
        :src="$frontmatter.image"
        :alt="$frontmatter.altText"
        :title="$frontmatter.altText"
      />
    </div>

    <Content />
  </div>

  <Content class="content" v-else />
</template>

<style scoped>
.note-date,
.author-item,
.authorDiv {
  padding: 0;
}

.content-header {
  text-align: center;
  margin-top: 5em;
  margin-bottom: 3em;
}

.note-title {
  margin: 0 0 10px;
}

.note-image {
  display: block;
  margin: 2rem auto;
  width: 80%;
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

.authorDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.author-name {
  font-size: 18px;
}

.description {
  font-size: 19px;
  color: grey;
  text-align: left;
  margin: 1rem 0 0;
}

@media screen and (max-width: 860px) {
  .content-header {
    margin-top: 3em;
  }

  .note-image {
    width: 100%;
  }
}
</style>
