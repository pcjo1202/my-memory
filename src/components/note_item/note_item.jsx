import React from 'react'
import styles from './note_item.module.css'
const NoteItem = ({ memo }) => {
  const { thumnail, title } = memo
  return (
    <li className={styles.note_item}>
      <div className={styles.preview}>
        {thumnail}
      </div>
      <p className={styles.title}>
        {title}
      </p>
    </li>
  )
}

export default NoteItem
