import React, { useEffect } from 'react'
import styles from './diary.module.css'

const Diary = ({ authService }) => {
  const onlogOut = () => {
    authService.googleSignOut()
  }

  useEffect(() => {})
  return (
    <div className={styles.container}>
      <h1>다이어리</h1>
      <button className={styles.logOut} onClick={onlogOut}>
        로그아웃
      </button>
    </div>
  )
}

export default Diary
