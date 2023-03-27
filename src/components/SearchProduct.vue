<script setup>
import search from '@/assets/images/search.svg'
import { ref } from 'vue'
import { fetchData, getAll } from '../composables/fetchData'

const searchValue = ref('')
const showButton = ref(false)

function handleSearch() {
  if (searchValue.value) {
    fetchData(`https://dummyjson.com/products/search?q=${searchValue.value}`)
  }
  showButton.value = true
}

function handleShowButton() {
  getAll()
  showButton.value = false
}
</script>

<template>
  <div className="search">
    <input type="text" placeholder="Search" v-model="searchValue" />
    <img className="placeholderIcon" :src="search" alt="search icon in a search box" />
    <button className="searchButton" @click="handleSearch">
      <p>Search</p>
      <img :src="search" alt="search icon" />
    </button>
  </div>
  <button v-if="showButton" className="showAll cta" @click="handleShowButton">
    Show All Products
  </button>
</template>

<style scoped>
div.search {
  position: relative;
  width: 100%;
  display: flex;
}

div.search input {
  width: 100%;
  padding: 16px 0px 16px 64px;
  border-radius: 8px;
}

input:focus,
input:hover {
  outline: 0;
  border-color: var(--orange-web);
}

div.search img.placeholderIcon {
  position: absolute;
  left: 24px;
  top: 12px;
  width: 24px;
}

div.search button {
  position: absolute;
  background-color: var(--orange-web);
  padding: 16px;
  right: 0;
  border-radius: 0px 8px 8px 0px;
}

button.showAll {
  width: 100%;
  padding: 16px;
  margin: 8px 0px;
  background-color: var(--oxford-blue);
  color: var(--platinum);
}

button.searchButton > img {
  display: none;
}

@media only screen and (max-width: 400px) {
  div.search input {
    padding: 16px 0px 16px 16px;
  }
  div.search button.searchButton {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 4px;
  }
  button.searchButton > img {
    display: inline-block;
    width: 24px;
  }
  button.searchButton > p {
    display: none;
  }

  div.search img.placeholderIcon {
    display: none;
  }
}
</style>
