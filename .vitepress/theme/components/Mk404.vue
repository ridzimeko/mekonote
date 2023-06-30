<template>
  <div class="notFound--div">
    <div>
      <h1 class="notFound_title">Tidak ada halaman yang tersedia</h1>
      <p>Ups, sepertinya kamu lagi nyasar karena tidak ada apa-apa disini</p>
      <a class="back_button" href="/">Oke balik aja</a>
      <p class="error_text">Error code: 404 Not Found</p>
    </div>
  </div>
</template>

<style scoped>
.notFound--div {
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0 1rem;
}

.notFound--div div {
  max-width: 680px;
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
</style>
