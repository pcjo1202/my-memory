import React from 'react'
import styles from './header_diary.module.css'

const HeaderDiary = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>
        <img src='/image/logo_transparent.png' alt='logo' />
      </div> */}
      <div className={styles.title}>
        <p>모든노트</p>
      </div>
    </header>
  )
}

export default HeaderDiary
