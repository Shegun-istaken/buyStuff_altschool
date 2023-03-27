<script setup>
// import { useRoute } from 'vue-router';
//     console.log(useRoute().name)
import loginImg from '@/assets/images/login.png'
import google from '@/assets/images/google.png'
import { reactive, watch } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
  email: '',
  password: '',
  errmsg: '',
  printerr: ''
})

watch(
  () => state.errmsg,
  () => {
    switch (state.errmsg) {
      case 'auth/invalid-email':
        state.printerr = 'Invalid Email'
        break
      case 'auth/user-not-found':
        state.printerr = 'User was not found. Try again'
        break
      case 'auth/wrong-password':
        state.printerr = 'Incorrect Password'
        break
      default:
    }
  }
)

function login() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, state.email, state.password)
    .then(() => {
      router.push('/products')
    })
    .catch((error) => {
      state.errmsg = error.code
    })
}
</script>

<template>
  <main className="authforms">
    <img :src="loginImg" alt="random login illustration" />
    <div className="authform">
      <div>
        <h1>Welcome to BuyStuff</h1>
        <h3>Login to get started</h3>
        <p v-if="state.printerr">{{ state.printerr }}</p>
      </div>
      <form action="submit">
        <label>Your Email Address<input type="email" v-model="state.email" /></label>
        <label>Password <input type="password" v-model="state.password" /></label>
        <button className="cta" @click.prevent="login">Login</button>
        <button className="google cta" @click.prevent="">
          Login with Google <img :src="google" alt="google icon" />
        </button>
        <p className="smallLogin">
          Don't have an account? <span>Click here to Register with BuyStuff</span>
        </p>
      </form>
    </div>
  </main>
</template>
