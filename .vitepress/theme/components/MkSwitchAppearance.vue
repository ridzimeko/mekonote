<script setup>
import RmIconNight from "./icons/RmIconNight.vue"
import RmIconLight from "./icons/RmIconLight.vue"
</script>

<template>
  <div>
    <button aria-checked="false">
      <span>
        <RmIconLight class="sun" />
      </span>
      <span>
        <RmIconNight class="moon" />
      </span>
    </button>
  </div>
</template>

<style scoped>
button {
  display: flex;
  justify-content: space-between;
  border: solid;
  background-color: transparent;
  padding: 5px 20px;
  border-radius: var(--rounded-border);
}

svg {
  width: 20px;
  height: 20px;
}

.moon {
  display: block;
}

.sun {
  display: block;
}
</style>
