<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  product: {
    required: true
  }
})

function openDetails() {
  router.push(`/products/${props.product.id}`)
}
</script>

<template>
  <div v-if="props.product" className="main" @click="openDetails">
    <img :src="props.product.thumbnail" :alt="` ${props.product.title} thumbnail`" />
    <h2>
      {{ props.product.title.length < 15 ? props.product.title : `${props.product.title.slice(0, 14)}...` }}
    </h2>

    <div className="price">
      <p>{{ `$${props.product.price}` }}</p>
      <p>{{ `-${props.product.discountPercentage}%` }}</p>
    </div>
  </div>
</template>

<style scoped>
div.main {
  width: 256px;
  padding: 8px 8px 24px 8px;
  border-radius: 8px;
  background-color: var(--oxford-blue);
  color: var(--platinum);
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

div.main img {
  width: 100%;
  height: 320px;
  margin-bottom: 16px;
  object-fit: cover;
}

div.price {
  display: flex;
  justify-content: space-between;
}
</style>
