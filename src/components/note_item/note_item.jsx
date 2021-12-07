import React from 'react'
import styles from './note_item.module.css'
const NoteItem = () => {
  return (
    <li className={styles.note_item}>
      <div className={styles.preview}>
        {}
      </div>
      <p className={styles.title}>첫번째 노트</p>
    </li>
  )
}

export default NoteItem
