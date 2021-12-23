import React from 'react'
import styles from './note_item.module.css'

import { RiDeleteBin6Line } from 'react-icons/ri'
import { useThemeContext } from '../../contexts/themeContext'

const NoteItem = ({ note, onDelete, handlePreview }) => {
  const { hashtag, title, date } = note

  const theme = useThemeContext()

  const bgStyle = {
    background: theme ? theme.preview : null
  }

  const fontStyle = {
    color: theme ? theme.text : null
  }

  const onClickNote = () => {
    handlePreview(note)
  }

  const handelDelete = event => {
    event.stopPropagation() // 이벤트 캡쳐링을 캡쳐링 막기 (delete 버튼을 누를 때 preview도 같이 나오는거 방지)
    onDelete(note)
  }
  return (
    <li className={styles.note_item} onClick={onClickNote} style={bgStyle}>
      <div className={styles.title} style={fontStyle}>
        {title}
      </div>
      <p className={styles.date} style={fontStyle}>
        {date}
      </p>
      <p className={styles.hashtag} style={fontStyle}>
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
