<script setup>
import ProductList from '@/components/ProductsList.vue'
import { RouterView } from 'vue-router'
import SearchProduct from '../components/SearchProduct.vue'
import CategoryList from '../components/CategoryList.vue'
</script>
<template>
  <main className="ProductsView">
    <h1>Products</h1>
    <div>
      <SearchProduct />
      <CategoryList />
    </div>
    <Suspense>
      <ProductList />
      <template #fallback>
        <h1>Loading data</h1>
      </template>
    </Suspense>

    <RouterView />
  </main>
</template>

<style scoped>
main.ProductsView {
  margin: 0px 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media only screen and (max-width: 400px) {
  main.ProductsView {
    margin: 0px 16px 0px 48px;
    padding: 0;
  }
}
</style>
