<!-- <script setup>
import {getAuth, signOut} from "firebase/auth"
import { useRouter } from "vue-router";

const router = useRouter()
function signUserOut (){
    const auth = getAuth();
    signOut(auth).then(()=>{
        router.push('/home\')
    })
}

</script> -->

<script setup>
import { useUserStore } from '../stores/userStore'
import { onMounted } from 'vue'
const user = useUserStore()

onMounted(() => {
  user.check()
})
</script>
<template>
  <h1>This is the Products View</h1>
  <!-- <button @click="signUserOut">Log Out</button> -->
</template>
