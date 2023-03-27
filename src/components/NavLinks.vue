<script setup>
import { RouterLink, useRouter } from 'vue-router'
import logo from '@/assets/images/buyStuff.png'
import { isLoggedIn } from '../composables/isLoggedIn'
import { signUserOut } from '../composables/signUserOut'
import {} from 'vue-router'
import { useUserStore } from '../stores/userStore'
import SideBar from './SideBar.vue'
import cart from '@/assets/images/cart.svg'

const user = useUserStore()
const router = useRouter()

function handleSignOut() {
  signUserOut()
  router.push('/')
}
</script>

<template>
  <header className="mainHeader">
    <img :src="logo" alt="buyStuff logo" />
    <nav className="nav">
      <RouterLink to="/">Home</RouterLink>
      <div v-if="!isLoggedIn" className="access">
        <RouterLink to="login">
          <button className="cta">Login</button>
        </RouterLink>
        <RouterLink to="/signup">
          <button className="cta">Sign Up</button>
        </RouterLink>
      </div>
      <div className="access" v-else>
        <div>
          <p>{{ `Welcome ${user.userData.email.split('@')[0]}` }}</p>
          <p>
            <small>{{ user.userData.email }}</small>
          </p>
        </div>
        <img className="cart" :src="cart" alt="cart icon" />
        <button className="cta" @click="handleSignOut">Sign Out</button>
      </div>
    </nav>
    <div className="sideBar">
      <SideBar />
    </div>
  </header>
</template>

<style scoped>
header.mainHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 64px;
}
.mainHeader nav {
  display: flex;
  align-items: center;
  gap: 48px;
}
nav > * {
  text-decoration: none;
  color: var(--oxford-blue);
}

img {
  width: 128px;
}

div.access {
  display: flex;
  align-items: center;
  gap: 24px;
}

div.access button {
  padding: 8px 16px;
  border-radius: 4px;
}

div.access small {
  opacity: 0.7;
}
img.cart {
  width: 24px;
  filter: invert(58%) sepia(98%) saturate(600%) hue-rotate(351deg) brightness(102%) contrast(98%);
  transition: 0.1s ease-in-out;
}

img.cart:hover,
img.cart:focus {
  opacity: 0.5;
  filter: invert(0%) sepia(63%) saturate(5520%) hue-rotate(318deg) brightness(100%) contrast(101%);
}

div.sideBar{
  display: none;
}

@media only screen and (max-width: 870px){

  div.sideBar{
    display: block;
  }
  nav.nav, div.userInfo{
    display: none;
  }

}

@media only screen and (max-width: 400px){
  header.mainHeader{
    margin: 16px 4px;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
