import React, { useEffect, useRef } from 'react'
import EditBtn from '../edit_btn/edit_btn'
import HeaderDiary from '../header_diary/header_diary'
import Menu from '../menu/menu'
import NoteList from '../note_list/note_list'
import styles from './diary.module.css'

const Diary = ({ authService }) => {
  const contentsRef = useRef()
  const onlogOut = () => {
    authService.googleSignOut()
  }

  const increase = () => {
    contentsRef.current.classList.toggle(`${styles.increase}`)
  }

  useEffect(() => {})
  return (
    <div className={styles.container}>
      <Menu contentsIncrease={increase} />
      <section ref={contentsRef} className={styles.contents}>
        <HeaderDiary />
        <NoteList />
      </section>
      <EditBtn />
    </div>
  )
}

export default Diary
