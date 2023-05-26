---
title: Catatan
layout: page
pageHeader:
  head: Catatan
  description: Berisi semua catatan yang pernah saya tulis
---

<script setup>
import { data as notes } from './.vitepress/theme/server/post.data'
import MkMyNotes from './.vitepress/theme/components/MkMyNotes.vue'
</script>

<div class="margin-body">

::: info Subcribe to [RSS](/feed.xml) for more new notes!
:::

<MkMyNotes style="margin-top: 2rem;"
  v-for="(note, i) in notes" 
  :key="i" 
  :title="note.title" 
  :description="note.frontmatter.description" 
  :date="note.date" 
  :readingTime="note.readingTime" 
  :url="note.url" 
/>

</div>
