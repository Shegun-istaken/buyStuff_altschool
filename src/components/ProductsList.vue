<script setup>
import { getAll } from '../composables/fetchData'
import ProductItem from '@/components/ProductItem.vue'
import { useProductStore } from '../stores/productStore'
// import { onMounted } from 'vue'


const products = useProductStore()

getAll()
</script>

<template>
  <main className="products" v-if="products.products">
    <ProductItem v-for="product in products.products" :product="product" :key="product.id" />
  </main>
</template>

<style scoped>
main.products {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 24px 0px;
}

main.otherMain{
  display: flex;
  flex-direction: column;
}
</style>
