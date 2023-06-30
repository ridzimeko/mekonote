<script setup>
import ExternalLink from "../components/icons/ExternalLink.vue"
</script>

<template>
  <!-- Image Cover -->
  <div class="about">
    <div class="cover" v-if="$frontmatter.coverImage">
      <img :src="$frontmatter.coverImage" class="coverImage" />
      <small v-if="$frontmatter.imageSource" class="imageCredit"
        ><a :href="$frontmatter.imageSource" target="_blank" rel="noreferrer"
          >Wallpaper source
          <ExternalLink class="icon-external-link" style="height: 20px; width: 20px"
        /></a>
      </small>
      <div class="pageHeader">
        <h1 class="aboutTitle">{{ $frontmatter.coverTitle }}</h1>
        <h3 class="aboutTagline">{{ $frontmatter.description }}</h3>
      </div>
    </div>
    <!-- Image Cover -->

    <div class="aboutDiv">
      <div>
        <Content />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  height: 100vh;
  top: -78px;
}

.coverImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 20% 50%;
  filter: brightness(0.9);
  background-color: var(--theme-background-dark);
}

.pageHeader {
  position: absolute;
  top: 40%;
  right: 5%;
  word-spacing: nowrap;
  max-width: 560px;
}

.aboutTitle {
  text-align: end;
  font-size: 6em;
  color: white;
  margin: 0;
}

.aboutTagline {
  color: white;
  text-align: justify;
}

.aboutDiv {
  margin-top: 2.2rem;
  padding: 0 10rem;
  font-size: 17px;
}

.imageCredit {
  color: white;
  position: absolute;
  bottom: 0vh;
  right: 10px;
  margin: 0 25px 25px 0;
}

.imageCredit a {
  color: white;
  text-decoration: none;
}

.imageCredit a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 820px) {
  .cover,
  .aboutDiv {
    scroll-snap-align: none;
  }
  .cover {
    position: static;
    height: inherit;
  }

  .pageHeader {
    display: none;
  }

  .imageCredit {
    position: static;
    display: block;
    color: gray;
    text-align: center;
    margin: 10px 0;
  }

  .imageCredit a {
    color: gray;
  }

  .aboutDiv {
    padding: 0 1rem;
  }
}
</style>
