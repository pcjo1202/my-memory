import React from 'react'
import styles from './note_item.module.css'

import { RiDeleteBin6Line } from 'react-icons/ri'

const NoteItem = ({ note, onDelete, handlePreview }) => {
  const { hashtag, title, date } = note

  const onClickNote = () => {
    handlePreview(note)
  }

  const handelDelete = event => {
    event.stopPropagation() // 이벤트 캡쳐링을 캡쳐링 막기 (delete 버튼을 누를 때 preview도 같이 나오는거 방지)
    onDelete(note)
  }
  return (
    <li className={styles.note_item} onClick={onClickNote}>
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
      <button className={styles.delete} onClick={handelDelete}>
        <RiDeleteBin6Line />
      </button>
    </li>
  )
}

export default NoteItem
