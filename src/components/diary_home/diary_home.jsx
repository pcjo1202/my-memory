import React from 'react'
import styles from './diary_home.module.css'

import HeaderDiary from '../header_diary/header_diary'
import NoteList from '../note_list/note_list'
import EditBtn from '../edit_btn/edit_btn'
import LoadingSpinner from '../loading_spinner/loading_spinner'
import Preview from '../preview/preview'

const DiaryHome = ({ note, onDelete, lodingState }) => {
  // console.log(lodingState)
  return (
    <main className={styles.home}>
      <div className={styles.bg_cover} />
      {/* <Preview /> */}
      <HeaderDiary />
      {lodingState
        ? <LoadingSpinner />
        : <NoteList note={note} onDelete={onDelete} />}
      <EditBtn />
    </main>
  )
}

export default DiaryHome
