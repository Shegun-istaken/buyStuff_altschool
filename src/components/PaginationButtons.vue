<script setup>
import { watch } from 'vue'
import { useProductStore } from '../stores/productStore'
import { reactive } from 'vue'

const products = useProductStore()
const disabled = reactive({
  prev: true,
  next: false
})

watch(
  () => products.pagination.skip,
  () => {
    if (products.pagination.skip > 89) {
      disabled.next = true
      disabled.prev= false
    } else if (products.pagination.skip <= 0) {
      disabled.prev = true
      disabled.next = false
    } else {
      disabled.prev = false
      disabled.next = false
    }
  }
)
</script>

<template>
  <div className="pagination">
    <button
      @click="products.setPagination('prev')"
      :className="`mainButtons ${disabled.prev && 'disabled'}`"
    >
      Previous
    </button>

    <button v-if="products.pagination.page > 1" @click="products.setPagination('one')">1</button>
    <button className="presentPage">{{ products.pagination.page }}</button>
    <button v-if="products.pagination.page < 10" @click="products.setPagination('ten')">10</button>
    <button
      @click="products.setPagination('next')"
      :className="`mainButtons ${disabled.next && 'disabled'}`"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
div.pagination {
  display: flex;
  gap: 48px;
  justify-content: center;
}

div.pagination button.mainButtons {
  background-color: var(--redwood);
  color: var(--platinum);
  padding: 16px 24px;
  border-radius: 8px;
}

div.pagination button.mainButtons.disabled {
  background-color: var(--slate-gray);
}

button.presentPage{
  background-color: var(--oxford-blue);
  color: var(--platinum);
  padding: 16px 24px;
  border-radius: 8px;
}
</style>
