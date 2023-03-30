import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useCartStore = defineStore('cartStore', () => {
  const cart = reactive([])

  function setCart(userId, data) {
    cart.forEach(element => {
        if (element.id == userId){
            // 
        }
    });
  }

  return { cart, setCart }
})
