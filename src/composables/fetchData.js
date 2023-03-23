import { useProductStore } from "../stores/productStore";

const products = useProductStore();

async function fetchData(link) {      
    const response = await fetch(link);      
    const data = await response.json();

    products.setProducts(data);
    return data;
  }

export { fetchData }