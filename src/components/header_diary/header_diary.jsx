import React from 'react'
import styles from './header_diary.module.css'

const HeaderDiary = ({ name }) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <p>
          {name}
        </p>
      </div>
    </header>
  )
}

export default HeaderDiary
