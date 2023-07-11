<template>
  <div class="notFound--div">
    <div>
      <h1 class="notFound_title">
        <i class="ti ti-info"></i>
        Page Not Found
      </h1>
      <p>There's nothing around here... are you perhaps lost?</p>
      <a class="back_button" href="/">Go back</a>
      <p class="error_text">Error code: 404 Not Found</p>
    </div>
    <i class="ti ti-error-404 text-404"></i>
  </div>
</template>

<style scoped>
.notFound--div {
  display: grid;
  place-items: center flex-start;
  grid-template-columns: 800px 1fr;
  height: 100vh;
  padding-left: 10vw;
  border: solid;
}

.notFound_title {
  font-size: 2.1rem;
}

.back_button {
  line-height: 3rem;
  padding: 10px 10px;
  border-radius: 9px;
  background-color: var(--brand-color-primary);
  color: white;
  text-decoration: none;
}

.error_text {
  margin-top: 2.2rem;
}

.text-404 {
  font-size: 20rem;
  color: var(--theme-color-light);
}
</style>
