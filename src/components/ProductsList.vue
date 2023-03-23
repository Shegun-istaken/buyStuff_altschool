<script setup>
import { fetchData } from '../composables/fetchData'
import ProductItem from '@/components/ProductItem.vue'
// import { ref } from 'vue'

const products= await fetchData('https://dummyjson.com/products/')

</script>

<template>
  <main>
    <ProductItem v-for="product in products.products" :product="product" :key="product.id" />
  </main>
</template>

<style scoped>
  main{
    display: flex;
    flex-flow: row wrap;
    justify-content:space-between;
    margin: 24px 48px;
  }
</style>
