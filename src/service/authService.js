// eslint-disable-next-line no-unused-vars
import firebaseapp from './firebase'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export class AuthService {
  googleAuth () {
    const auth = getAuth()
    auth.languageCode = 'it'
    const provider = new GoogleAuthProvider()
    return signInWithRedirect(auth, provider)
  }

  googleSignOut () {
    const auth = getAuth()
    return signOut(auth)
  }

  googleGetAuthState (onChangeUser) {
    const auth = getAuth()
    return onAuthStateChanged(auth, user => {
      onChangeUser(user)
    })
  }
}
