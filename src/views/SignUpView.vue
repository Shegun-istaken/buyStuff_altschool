<script setup>
import signup from '@/assets/images/signup.png'
import google from '@/assets/images/google.png'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useUserStore } from '@/stores/userStore.js'

const user = useUserStore()
const router = useRouter()
const state = reactive({
  name: '',
  email: '',
  password: ''
})

function register() {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, state.email, state.password, state.displayName)
    .then((data) => {
      router.push('/products')
    })
    .catch((error) => {
      alert(error.message)
    })
}

function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
  .then((data) => {
      router.push('/products')
    })
    .catch((error) => {
      alert(error.message)
    })
}
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
        <label>Your First Name<input type="text" v-model="state.name" /></label>
        <label
          >Your Email address<input
            type="email"
            placeholder="example@gmail.com"
            v-model="state.email"
        /></label>
        <label>Password <input type="password" v-model="state.password" /> </label>

        <button className="cta" @click.prevent="register">Sign Up</button>
        <button className="google cta" @click.prevent="signInWithGoogle">
          Sign Up with Google <img :src="google" alt="google icon" />
        </button>
        <p className="smallLogin">Already have an account? <span>Click here to Login</span></p>
      </form>
    </div>
  </main>
</template>
