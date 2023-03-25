import { useProductStore } from '../stores/productStore'

const products = useProductStore()

async function fetchData(link) {
  const response = await fetch(link)
  const data = await response.json()
  products.setProducts(data)
}

function getAll() {
  fetchData('https://dummyjson.com/products')
}

async function fetchCategories() {
  const response = await fetch('https://dummyjson.com/products/categories')
  const data = await response.json()
  products.setCategories(data)
}

export { fetchData, fetchCategories, getAll }
