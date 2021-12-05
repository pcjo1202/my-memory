import React, { useEffect } from 'react'
import AddBtn from '../edit_btn/edit_btn'
import HeaderDiary from '../header_diary/header_diary'
import Menu from '../menu/menu'
import styles from './diary.module.css'

const Diary = ({ authService }) => {
  const onlogOut = () => {
    authService.googleSignOut()
  }

  useEffect(() => {})
  return (
    <div className={styles.container}>
      <Menu />
      <section className={styles.contents}>
        <HeaderDiary />
        <AddBtn />
      </section>
    </div>
  )
}

export default Diary
