<script setup>
import { RouterView } from 'vue-router'
import NavLinks from './components/NavLinks.vue'
import { onMounted } from 'vue'
import { authChange } from './composables/isLoggedIn'
import { useUserStore } from '@/stores/userStore.js';
const user = useUserStore()

onMounted(() => {
  authChange()
  user.updateAuth()
})

</script>

<template>
  <NavLinks />
  <RouterView />

  <footer><small>Altschool 3rd Semester Exam | Oluwasegun Samuel</small></footer>
</template>

<style scoped>
footer {
  margin: 16px 0px;
  display: flex;
  justify-content: center;
}
</style>
