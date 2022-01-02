import React from 'react'
import { useThemeContext } from '../../contexts/themeContext'
import { FiBookmark } from 'react-icons/fi'
import { FcBookmark } from 'react-icons/fc'
import { BiArrowBack } from 'react-icons/bi'
import styles from './preview.module.css'
import { useNoteStateContext } from '../../contexts/NoteContext'

const Preview = ({ preview, handlePreview }) => {
  const useTheme = useThemeContext()
  const useNoteState = useNoteStateContext()
  const { note, setNote, bookmarkId, setBookmarkId } = useNoteState

  console.log(note[preview.date][preview.id])
  console.log(bookmarkId)

  const { date, title, emotion, text, bookmark } = note[preview.date][
    preview.id
  ]

  const onClickExit = () => {
    handlePreview(preview)
  }

  const handleBookmark = (date, id) => {
    setNote(note => {
      const update = { ...note }
      const bookmark = update[date][id].bookmark
      bookmark === true
        ? (update[date][id].bookmark = false)
        : (update[date][id].bookmark = true)
      return update
    })

    setBookmarkId(prev => {
      const update = { ...prev }
      if (update[id]) {
        delete update[id]
      } else {
        update[id] = preview
      }
      return update
    })
  }

  const bgStyle = {
    background: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].background
      : null
  }

  const fontStyle = {
    color: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].text
      : null
  }

  return (
    <section className={styles.preview} style={bgStyle}>
      <header className={styles.top}>
        <button className={styles.exit} onClick={onClickExit}>
          <BiArrowBack style={fontStyle} />
        </button>
        <p className={styles.date} style={fontStyle}>
          {date}
        </p>
        <button
          className={styles.bookmark}
          onClick={() => handleBookmark(preview.date, preview.id)}
        >
          {bookmark ? <FcBookmark /> : <FiBookmark />}
        </button>
      </header>
      <div className={styles.second}>
        <div className={styles.title} style={fontStyle}>
          {title}
        </div>
        <div className={styles.emotion}>
          {emotion}
        </div>
      </div>
      <div className={styles.text} style={fontStyle}>
        {text}
      </div>
    </section>
  )
}

export default Preview
