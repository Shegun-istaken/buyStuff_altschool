<script setup>
    import ProductList from "@/components/ProductsList.vue"
    import { RouterView } from "vue-router";
</script>
<template>
 <h1>Products</h1>

    <Suspense>
        <ProductList />
        <template #fallback>
            <h1>Loading data</h1>
        </template>
    </Suspense>

    <RouterView />
</template>