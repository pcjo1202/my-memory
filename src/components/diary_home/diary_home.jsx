import React from 'react'
import styles from './diary_home.module.css'
import HeaderDiary from '../header_diary/header_diary'
import NoteList from '../note_list/note_list'
import EditBtn from '../edit_btn/edit_btn'

const DiaryHome = ({ memo }) => {
  return (
    <acticle className={styles.home}>
      <HeaderDiary />
      <NoteList memo={memo} />
      <EditBtn />
    </acticle>
  )
}

export default DiaryHome