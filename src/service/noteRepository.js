import { database } from './firebase'
import { set, ref, remove, onValue } from 'firebase/database'

export class NoteRepository {
  syncNote (userId, onUpdate) {
    onValue(ref(database, `users/${userId}`), snapshot => {
      const data = snapshot.val()
      onUpdate(data)
    })
  }

  saveNote (userId, note) {
    // userId와 저장할 데이터 (note)를 받는다.
    set(ref(database, `users/${userId}`), note)
  }

  removeNote (userId) {
    remove(ref(database, `users/${userId}`))
  }
}
