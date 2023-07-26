<template>
  <main>
    <div class="notFound_div">
      <h1 class="notFound_title">
        <i class="ti ti-info"></i>
        Page Not Found
      </h1>
      <p>There's nothing around here... are you perhaps lost?</p>
      <a class="back_button" href="/">Go back</a>
      <p class="error_text">Error code: 404 Not Found</p>
    </div>
    <i class="ti ti-error-404 text-404"></i>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 10vw;
}

.notFound_div {
  max-width: 520px;
}

.notFound_title {
  font-size: 2.1rem;
}

.back_button {
  line-height: 3rem;
  padding: 10px 10px;
  border-radius: 9px;
  background-color: var(--mk-color-primary);
  color: white;
  text-decoration: none;
}

.error_text {
  margin-top: 2.2rem;
}

.text-404 {
  font-size: 18rem;
  color: var(--theme-color-light);
}

@media (max-width: 980px) {
  .text-404 {
    display: none;
  }
}
</style>
