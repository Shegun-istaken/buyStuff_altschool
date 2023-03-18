import { getAuth, signOut } from 'firebase/auth'

function signUserOut() {
  const auth = getAuth()

  signOut(auth)
}

export { signUserOut }
