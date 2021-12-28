import React from 'react'
import styles from './note_item.module.css'

import { RiDeleteBin6Line } from 'react-icons/ri'
import { useThemeContext } from '../../contexts/themeContext'
import { useNoteStateContext } from '../../contexts/NoteContext'

const NoteItem = ({ note, handlePreview }) => {
  const { hashtag, title, date } = note
  const useNoteState = useNoteStateContext()
  const useTheme = useThemeContext()

  const bgStyle = {
    background: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].preview
      : null
  }

  const fontStyle = {
    color: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].text
      : null
  }

  const onClickNote = () => {
    handlePreview(note)
  }

  const handelDelete = event => {
    event.stopPropagation() // 이벤트 캡쳐링을 캡쳐링 막기 (delete 버튼을 누를 때 preview도 같이 나오는거 방지)
    useNoteState.onDelete(note)
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
