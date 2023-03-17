<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/signup">
    <button className="getStarted cta">Get Started</button>
  </RouterLink>
</template>

<style scoped>
button {
  padding: 20px 48px;
  border-radius: 8px;
}

</style>
