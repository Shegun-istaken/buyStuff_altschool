// import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useUserStore = defineStore('user', () => {
  function check() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, 'newTest')
      } else {
        console.log('no-user')
      }
    })
  }

  return {check}
})
