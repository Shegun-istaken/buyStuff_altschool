import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore('product', ()=>{
    const products = ref('');
    const categories = ref('');

    function setProducts (value){
        products.value = value.products
    }

    function setCategories (value){
        categories.value = value
    }

    return {products, categories, setProducts, setCategories}
})