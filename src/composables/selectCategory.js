import { fetchData } from './fetchData'

export default function fetchCategory(event) {
  const category = event.target.outerText
  if (category == 'All Categories') {
    fetchData('https://dummyjson.com/products')
  } else {
    fetchData(`https://dummyjson.com/products/category/${category}`)
  }
}
