// eslint-disable-next-line no-unused-vars
import firebaseapp from './firebase'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut
} from 'firebase/auth'

export class AuthService {
  googleAuth () {
    const auth = getAuth()
    auth.languageCode = 'it'
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  googleSignOut () {
    const auth = getAuth()
    signOut(auth)
  }
}
