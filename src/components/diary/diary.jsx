import React, { useEffect } from 'react'
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
    </div>
  )
}

export default Diary
