<script setup>
import expand from '@/assets/images/expand.svg'
import { fetchCategories } from '@/composables/fetchData.js'
import { useProductStore } from '../stores/productStore'
import { ref } from 'vue'
import fetchCategory from '../composables/selectCategory'
const categoriesOpen = ref(false)

function handleCategories() {
  if (products.categories && !categoriesOpen.value) {
    categoriesOpen.value = true
  } else if (!products.categories && !categoriesOpen.value) {
    fetchCategories()
    categoriesOpen.value = true
  } else {
    categoriesOpen.value = false
  }
}

window.onclick = (event) => {
  if (!event.target.closest('#category')) {
    categoriesOpen.value = false
  }
}
const products = useProductStore()
</script>

<template>
  <div className="categories">
    <button className="categories cta" id="category" @click="handleCategories">
      Categories <img :src="expand" alt="dropdown expand icon" />
    </button>
    <ul v-if="products.categories && categoriesOpen">
      <li className="categories" @click="fetchCategory">All Categories</li>
      <li
        v-for="category in products.categories"
        :key="category"
        className="categories"
        @click="fetchCategory"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
div.categories {
  position: relative;
}
button.categories {
  display: flex;
  align-items: center;
  padding: 8px 24px;
  gap: 8px;
  margin-top: 8px;
}
button.categories img {
  width: 24px;
}

div.categories ul {
  position: absolute;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
div.categories li.categories {
  width: 128px;
  list-style: none;
  background-color: white;
  text-align: center;
  padding: 8px;
  border: 0.1px solid var(--orange-web);
  cursor: pointer;
}

@media only screen and (max-width: 400px){

  button.categories {

  padding: 4px 8px;
    font-size: 12px;
}

}
</style>
