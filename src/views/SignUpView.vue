<script setup>
import signup from '@/assets/images/login.png'
import google from '@/assets/images/google.png'
</script>

<template>
  <main className="authforms">
    <img :src="signup" alt="random sign up illustration" />
    <div className="authform">
      <div>
        <h1>Welcome to BuyStuff</h1>
        <h3>Set up your account to get started</h3>
      </div>

      <form action="submit">
        <label>Your First Name<input type="text" /></label>
        <label>Your Email address<input type="email" placeholder="example@gmail.com" /></label>
        <label>Password <input type="password" /> </label>

        <button className="cta" @click.prevent="">Sign Up</button>
        <button className="google cta" @click.prevent="">
          Sign Up with Google <img :src="google" alt="google icon" />
        </button>
        <p className="smallLogin">Already have an account? <span>Click here to Login</span></p>
      </form>
    </div>
  </main>
</template>

