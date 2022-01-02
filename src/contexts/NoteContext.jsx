import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import useFirstRender from '../hook/useFirstRender'

const noteContext = createContext()

const NoteProvider = ({ children, repository, userId }) => {
  const [note, setNote] = useState({})
  const [bookmarkId, setBookmarkId] = useState({})
  /* firebase에 저장되어있는 데이터를 가져온다. */
  useEffect(
    () => {
      repository.getNote(userId, 'note', data => {
        setNote(data)
      })
      repository.getNote(userId, 'bookmark', data => {
        setBookmarkId(data)
      })
    },
    [repository, userId]
  )

  /* 처음 렌더링을 제외하고 렌더링이 될때마다 firebase에 데이터 저장 */
  const saveNote = useCallback(
    () => {
      repository.saveNote(userId, note, 'note')
      repository.saveNote(userId, bookmarkId, 'bookmark')
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [note]
  )
  useFirstRender(saveNote)

  /* note State에 저장 */
  const onAdd = data => {
    setNote(notes => {
      const update = { ...notes }
      const innerData = update[data.date]
      update[data.date] = { ...innerData, [data.id]: data }
      return update
    })
  }

  /* note State에서 해당 데이터 삭제 */
  const onDelete = data => {
    setNote(note => {
      const update = { ...note }
      delete update[data.date][data.id]
      return update
    })
  }

  const ntoeProviderValue = {
    note,
    setNote,
    bookmarkId,
    setBookmarkId,
    onAdd,
    onDelete
  }

  return (
    <noteContext.Provider value={ntoeProviderValue}>
      {children}
    </noteContext.Provider>
  )
}

const useNoteStateContext = () => useContext(noteContext)

export { NoteProvider, useNoteStateContext }
