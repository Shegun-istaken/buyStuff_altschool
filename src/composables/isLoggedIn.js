import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'

const isLoggedIn = ref(false)
let userData = ref('')

function authChange() {
  let auth

  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      userData.value = user
    } else {
      isLoggedIn.value = false
    }
  })
}

export { isLoggedIn, authChange, userData }
