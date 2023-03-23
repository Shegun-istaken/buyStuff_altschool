import { ref } from 'vue'
import { defineStore } from 'pinia'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebaseConfig'

export const useUserStore = defineStore('user', () => {
  const userData = ref('')
  const userEmailCut = ref('')

  function updateAuth() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userData.value = user
      }
    })
  }

  return { userData, userEmailCut, updateAuth }
})
