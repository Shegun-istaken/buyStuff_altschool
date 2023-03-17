<script setup>
// import { useRoute } from 'vue-router';
//     console.log(useRoute().name)
import login from '@/assets/images/login.png'
import google from "@/assets/images/google.png"
</script>

<template>
  <main className="authforms">
    <img :src="login" alt="random login illustration" />
    <div className="authform">
      <div>
        <h1>Welcome to BuyStuff</h1>
        <h3>Login to get started</h3>
      </div>
      <form action="submit">
        <label>Your Email Address<input type="email" /></label>
        <label>Password <input type="password" /></label>
        <button className="cta" @click.prevent="">Login</button>
        <button className="google cta" @click.prevent="">
          Login with Google <img :src="google" alt="google icon" />
        </button>
        <p className="smallLogin">Don't have an account? <span>Click here to Register with BuyStuff</span></p>
      </form>
    </div>
  </main>
</template>
