import { ref } from 'vue'
import { defineStore } from 'pinia'

// import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useUserStore = defineStore('user', () => {
  const userData = ref('')
  const userEmailCut = ref("");

  function setUserData(value) {
    userData.value = value;
    userEmailCut.value = value.email.split('@')[0]
  }
  //     const auth = getAuth()
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         userData.value = user.email.split('@')[0]
  //       }
  //     })

  //     return {check}
  //   }
  return { userData, userEmailCut, setUserData,  }
})
