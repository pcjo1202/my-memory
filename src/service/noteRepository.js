import { database } from './firebase'
import { set, ref, remove, get, child } from 'firebase/database'

class NoteRepository {
  async syncNote (userId, onUpdate) {
    // get을 사용하면 처음 로그인 후 접속했을 때에만 데이터를 불러 올 수 있게 했다.
    const dbRef = ref(database)
    get(child(dbRef, `users/note/${userId}`)) //
      .then(snapshot => {
        const data = snapshot.val()
        data && onUpdate(data)
      })
  }

  saveNote (userId, note) {
    // // userId와 저장할 데이터 (note)를 받는다.
    return set(ref(database, `users/note/${userId}`), note)
    // localStorage.setItem(userId, JSON.stringify(note))
  }

  removeNote (userId) {
    return remove(ref(database, `users/note/${userId}`))
  }
}

export default NoteRepository
