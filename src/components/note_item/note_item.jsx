import React from 'react'
import styles from './note_item.module.css'
const NoteItem = ({ memo }) => {
  const { hashtag, title, date } = memo
  return (
    <li className={styles.note_item}>
      <div className={styles.title}>
        {title}
      </div>
      <p className={styles.date}>
        {date}
      </p>
      <p className={styles.hashtag}>
        {hashtag}
      </p>
    </li>
  )
}

export default NoteItem
