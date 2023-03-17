<script setup>
import { RouterView } from 'vue-router'
import hero from '@/assets/images/hero.png'
import GetStartedButton from '../components/atoms/GetStartedButton.vue'
</script>

<template>
  <main>
    <div>
      <h1>Get Everything you need on BuyStuff</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio neque quaerat numquam
        assumenda! Dolore recusandae perspiciatis excepturi vero blanditiis atque quam eveniet,
        pariatur ipsam.
      </p>
      <div className="getStarted"><GetStartedButton /></div>
    </div>
    <img :src="hero" alt="heroimage" />
  </main>
  <aside>
    <p>
      <b>Altschool Third Semester exam project</b>. Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Quasi voluptates distinctio aperiam fugiat nisi qui impedit praesentium
      consequuntur cum a ut similique doloremque vitae rem optio quibusdam suscipit, ex beatae!
      Porro ratione quae praesentium assumenda corporis, voluptates architecto nesciunt possimus
      ullam dolor pariatur suscipit, debitis distinctio! Excepturi perferendis doloremque, qui
      minus, cum aut rem esse omnis accusantium distinctio asperiores assumenda.
    </p>
  </aside>

  <RouterView />
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 72px 0px;
}

main > div {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 40%;
}

main > div h1 {
  width: 80%;
}

main > div p {
  width: 60%;
  font-weight: 100;
  font-size: 14px;
}

img {
  width: 100%;
  max-width: 480px;
}

aside {
  background-color: var(--oxford-blue);
  color: white;
  margin: 40px 0;
}

aside p {
  width: 70%;
  margin: 0 auto;
  padding: 48px;
  font-weight: 100;
}
</style>
