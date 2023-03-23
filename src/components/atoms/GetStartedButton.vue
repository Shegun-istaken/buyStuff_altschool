<script setup>
import { useRouter } from 'vue-router'
import { isLoggedIn } from '@/composables/isLoggedIn'

const router = useRouter();

function pushRouter(){
  if(isLoggedIn){
    router.push('/products')
  }else{
    router.push('/signup')
  }
}
</script>

<template>
  <button className="getStarted cta" @click="pushRouter">
    {{ isLoggedIn ? 'Jump to Products Page' : 'Get Started' }}
  </button>
</template>

<style scoped>
button {
  padding: 20px 48px;
  border-radius: 8px;
}
</style>
