import React from 'react'
import styles from './diary_home.module.css'
import HeaderDiary from '../header_diary/header_diary'
import NoteList from '../note_list/note_list'
import EditBtn from '../edit_btn/edit_btn'

const DiaryHome = ({ note }) => {
  return (
    <main className={styles.home}>
      <div className={styles.bg_cover} />
      <HeaderDiary />
      <NoteList note={note} />
      <EditBtn />
    </main>
  )
}

export default DiaryHome
