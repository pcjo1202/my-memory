import React from 'react'
import styles from './diary_home.module.css'

import HeaderDiary from '../header_diary/header_diary'
import NoteList from '../note_list/note_list'
import EditBtn from '../edit_btn/edit_btn'
import { useNoteStateContext } from '../../contexts/NoteContext'

const DiaryHome = ({ handlePreview }) => {
  const useNoteState = useNoteStateContext()
  const { note } = useNoteState
  return (
    <main className={styles.home}>
      <HeaderDiary name='나의 기록' />
      {Object.keys(note).length === 0
        ? <h1 className={styles.noItem}>당신의 하루를 남겨보세요😍</h1>
        : Object.keys(note).map(date =>
          <NoteList
            key={date}
            date={date}
            note={note[date]}
            handlePreview={handlePreview}
            />
          )}

      <EditBtn />
    </main>
  )
}

export default DiaryHome
