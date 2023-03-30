<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/productStore'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, watch } from 'vue'
import star from '@/assets/images/star.svg'
import cart from '@/assets/images/cart.svg'
import {addToCart} from "@/composables/addtoCart.js"

const routes = useRoute()
const router = useRouter()
const products = useProductStore()
const src = ref()
const imgIndex = ref(0)

const product = ref()
function setProduct() {
  if (products.products) {
    product.value = products.products.find((item) => item.id == routes.params.id)
    src.value = product.value.images
  }
}
onMounted(() => {
  setProduct()
})

watch(
  () => products.products,
  () => {
    setProduct()
  }
)

function moveImage(value, $event) {
  const total = product.value.images.length
  switch (value) {
    case 'next':
      if (imgIndex.value == total - 1) {
        imgIndex.value = 0
      } else {
        imgIndex.value = imgIndex.value + 1
      }
      break
    case 'previous':
      if (imgIndex.value == 0) {
        imgIndex.value = total - 1
      } else {
        imgIndex.value = imgIndex.value - 1
      }
      break
    default:
  }
}

function exit() {
  router.push('/products')
}

function mainExit(event) {
  if (!event.target.closest('.detailsModal')) {
    router.push('/products')
  }
}
</script>

<template>
  <main className="modal" @click="mainExit">
    <div className="detailsModal" v-if="product">
      <div className="modalImages">
        <button @click="moveImage('previous')">&lt;</button>
        <img :src="src[imgIndex]" alt="" />
        <button @click="moveImage('next')">></button>
      </div>

      <div className="modalDetails">
        <button className="x" @click="exit">X</button>
        <div className="title">
          <h2 className="title">{{ product.title }}
          </h2>
          <p>{{ `$${product.price}` }}</p>
        </div>

        <p className="description">
          {{ product.description }} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          reiciendis aperiam tenetur eos at perspiciatis corrupti. Est veniam, excepturi quas
          exercitationem non eius minus optio iure voluptatem maxime, fugiat cumque. Nesciunt
          voluptatibus voluptatem alias consequuntur pariatur delectus excepturi quas veritatis odit
          illum ab dolore laborum veniam iure accusantium, dolorem necessitatibus aliquid? Sequi
          explicabo quas quae eveniet animi? Dolores, perferendis optio. In doloremque corporis ab
          aliquid neque pariatur aperiam quos quia ex alias eum ea iusto distinctio quis, magni
          maxime velit delectus vitae nulla? Vel, repudiandae? Possimus vero aspernatur officiis
          sunt.
        </p>

        <div className="rating">
          <p className="star">
            ${{ product.rating }} <img :src="star" alt="star to signify rating" />
          </p>
          <p>{{ `-${product.discountPercentage}%` }}</p>
        </div>

        <button className="cta cartButton" @click="addToCart">
          Add to Cart <img :src="cart" alt="cart icon" className="cart" />
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main.modal {
  background-color: hsla(221, 51%, 16%, 0.8);
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
div.detailsModal {
  position: fixed;
  z-index: 2;
  background-color: white;
  width: 880px;
  top: 48px;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 8px;
  height: 480px;
  display: flex;
}

div.modalImages {
  display: flex;
  align-items: center;
  /* gap: 16px; */
  justify-content: space-between;
  width: 40%;
  padding: 8px 32px;
  border-right: 1px solid hsla(0, 0%, 0%, 0.2);
}

div.modalImages button {
  font-size: 48px;
}
.modalImages img {
  max-width: 100%;
  max-height: 100%;
  width: 80%;
  height: 400px;
  object-fit: cover;
}

div.modalDetails {
  width: 60%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;
}

h2.title{
  width: 80%;
}

button.x {
  color: red;
  font-size: 24px;
  font-weight: 700;
}

div.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.title p {
  font-weight: 700;
  font-size: 20px;
  color: var(--redwood);
}

div.rating {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
}

div.rating p:last-child {
  color: red;
}
p.star {
  display: flex;
  align-items: center;
  gap: 4px;
}
p.star img,
img.cart {
  width: 20px;
  filter: invert(57%) sepia(4%) saturate(6474%) hue-rotate(319deg) brightness(80%) contrast(76%);
}

button.cartButton {
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

@media only screen and (max-width: 1024px){

  div.detailsModal{
    width: 720px;
  }

  div.modalDetails > p{
    font-size: 12px;
  }

}

@media only screen and (max-width: 810px){

  div.detailsModal{
    width: 320px;
    flex-direction: column;
    /* height: auto; */
    /* overflow: auto; */
  }

  div.modalImages{
    width: 98%;
    border: none;
    padding: 8px 8px;
  }
  .modalImages img{
    height: 160px;
  }

  p.description{
    height:48px;
    overflow: auto;
  }

  div.modalDetails{
    width: 90%;
    gap: 16px;
    margin-bottom: 8px;
  }

}

@media only screen and (max-width: 290){

  div.detailsModal{
    width: 160px;
  }

}
</style>
