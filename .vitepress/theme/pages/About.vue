<script setup></script>

<template>
  <!-- Image Cover -->
  <div class="about-container">
    <div class="cover" v-if="$frontmatter.coverImage">
      <img :src="$frontmatter.coverImage" class="coverImage" />
      <small v-if="$frontmatter.imageSource" class="imageCredit">
        <a :href="$frontmatter.imageSource" target="_blank" rel="noreferrer">
          Wallpaper source
          <i class="ti ti-external-link"></i>
        </a>
      </small>
      <div class="pageHeader">
        <h1 class="aboutTitle">{{ $frontmatter.coverTitle }}</h1>
        <h3 class="aboutTagline">{{ $frontmatter.description }}</h3>
      </div>
    </div>
    <!-- Image Cover -->

    <Content class="about-content" />
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  height: 100vh;
  top: -79px;
}

.coverImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 20% 50%;
  filter: brightness(0.9);
  background-color: var(--mk-background);
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

.about-content {
  max-width: 1000px;
  margin: auto;
  line-height: 1.4;
  font-size: 17px;
  padding: 0 1rem;
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
