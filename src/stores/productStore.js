import { defineStore } from 'pinia'
import { ref, reactive, watch } from 'vue'
import { getAll } from '../composables/fetchData'

export const useProductStore = defineStore('product', () => {
  const products = ref('')
  const categories = ref('')
  const pagination = reactive({
    limit: 10,
    skip: 0,
    page: 1,
  })

  watch(
    () => pagination.skip,
    () => {
      pagination.page = parseInt(pagination.skip.toString().charAt(0)) + 1
    }
  )

  function setPagination(value, $event) {
    switch (value) {
      case 'next':
        if (pagination.skip >= 90) {
          break
        } else {
          pagination.skip += 10
          getAll()
        }
        break
      case 'prev':
        if (pagination.skip <= 0) {
          break
        } else {
          pagination.skip -= 10
          getAll()
        }
        break
      case 'one':
        pagination.skip = 0
        getAll()
        break
      case 'ten':
        pagination.skip = 90
        getAll()
        break
      default:
        break
    }
  }

  function setProducts(value) {
    products.value = value.products
  }

  function setCategories(value) {
    categories.value = value
  }

  return { products, categories, pagination, setProducts, setCategories, setPagination }
})
