<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/buyStuff.png'
import { isLoggedIn } from '../composables/isLoggedIn';
import { signUserOut } from '../composables/signUserOut';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';

const user = useUserStore();

const router = useRouter();
function handleSignOut(){
  signUserOut()
  router.push('/')
}
</script>

<template>
  <header className="mainHeader">
    <img :src="logo" alt="buyStuff logo" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <div v-if="!isLoggedIn" className="access">
        <RouterLink to="login">
          <button className="cta" >Login</button>
        </RouterLink>
        <RouterLink to="/signup">
          <button className="cta" >Sign Up</button>
        </RouterLink>
      </div>
      <div className="access" v-else>
        <div>
          <p>{{ `Welcome ${user.userEmailCut}` }}</p>
          <p><small>{{ user.userData.email }}</small></p>
        </div>
        <button className="cta" @click="handleSignOut">Sign Out</button>
      </div>
    </nav>
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

div.access{
    display: flex;
    align-items: center;
    gap: 16px;
}

div.access button{
    padding: 8px 16px;
    border-radius: 4px;
}

div.access small{
  opacity: 0.7
}

</style>
