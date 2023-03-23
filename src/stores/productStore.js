import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore('product', ()=>{
    const products = ref('');

    function setProducts (value){
        products.value = value.products
        // console.log(value.products, "value")
        // console.log(products.value, "products")
    }

    return {products, setProducts}
})