import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue';

const isLoggedIn = ref(false)

function authChange() {
  let auth
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
}

export { isLoggedIn, authChange }
