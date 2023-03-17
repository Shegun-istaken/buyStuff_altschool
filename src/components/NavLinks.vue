<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/buyStuff.png'
</script>

<template>
  <header className="mainHeader">
    <img :src="logo" alt="buyStuff logo" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <div className="access">
        <RouterLink to="login">
          <button className="cta" >Login</button>
        </RouterLink>
        <RouterLink to="/signup">
          <button className="cta" >Sign Up</button>
        </RouterLink>
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

</style>
