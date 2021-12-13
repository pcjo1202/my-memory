import React from 'react'
import styles from './note_item.module.css'
const NoteItem = ({ note }) => {
  const { hashtag, title, date } = note
  return (
    <li className={styles.note_item}>
      <div className={styles.title}>
        {title}
      </div>
      <p className={styles.date}>
        {date}
      </p>
      <p className={styles.hashtag}>
        {hashtag &&
          hashtag.map(tag => {
            return `#${tag}`
          })}
      </p>
    </li>
  )
}

export default NoteItem
