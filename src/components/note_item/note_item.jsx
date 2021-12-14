import React from 'react'
import styles from './note_item.module.css'

import { RiDeleteBin6Line } from 'react-icons/ri'

const NoteItem = ({ note, onDelete }) => {
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
      <button
        className={styles.delete}
        onClick={() => {
          onDelete(note)
        }}
      >
        <RiDeleteBin6Line />
      </button>
    </li>
  )
}

export default NoteItem
