<script setup>
import { getAll } from '../composables/fetchData'
import ProductItem from '@/components/ProductItem.vue'
import { useProductStore } from '../stores/productStore'
import PaginationButtons from './PaginationButtons.vue'

const products = useProductStore()

getAll()
</script>

<template>
  <div v-if="products.products">
    <main className="products">
      <ProductItem v-for="product in products.products" :product="product" :key="product.id" />
    </main>
    <PaginationButtons />
  </div>
</template>

<style scoped>
main.products {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 48px;
  margin: 24px 0px;
}

main.otherMain {
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 960px){

  main.products{
    gap: 8px;
  }
}
</style>
