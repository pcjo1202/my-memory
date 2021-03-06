import React from 'react'
import { useThemeContext } from '../../contexts/themeContext'
import NoteItem from '../note_item/note_item'
import styles from './note_list.module.css'
const NoteList = ({ note, handlePreview, date }) => {
  const useTheme = useThemeContext()

  const fontStyle = {
    color: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].text
      : null
  }

  return (
    <nav className={styles.note_list_wrapper}>
      <div className={styles.partition}>
        <span className={styles.date} style={fontStyle}>
          {date}
        </span>
        <hr />
      </div>
      <ul className={styles.note_list}>
        {Object.keys(note).map(id =>
          <NoteItem key={id} note={note[id]} handlePreview={handlePreview} />
        )}
      </ul>
    </nav>
  )
}
export default NoteList
