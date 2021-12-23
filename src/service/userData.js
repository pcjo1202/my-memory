import { child, get, ref, set } from 'firebase/database'
import { database } from './firebase'

class UserData {
  save (userId, setting) {
    return set(ref(database, `users/${userId}/setting`), setting)
  }

  get (userId, onUpdate) {
    const dbRef = ref(database)
    get(child(dbRef, `users/${userId}/setting`)) //
      .then(snapshot => {
        const data = snapshot.val()
        data && onUpdate(data)
      })
  }
}

export default UserData
