import { auth } from './firebase'
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export class AuthService {
  googleAuth () {
    auth.languageCode = 'it'
    const provider = new GoogleAuthProvider()
    return signInWithRedirect(auth, provider)
  }

  googleSignOut () {
    return signOut(auth)
  }

  googleGetAuthState (onChangeUser) {
    return onAuthStateChanged(auth, user => {
      onChangeUser(user)
    })
  }
}
