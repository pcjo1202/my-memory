import React, { useRef } from 'react'
import { useThemeContext } from '../../contexts/themeContext'
import { FiBookmark } from 'react-icons/fi'
import { FcBookmark } from 'react-icons/fc'
import { BiArrowBack } from 'react-icons/bi'
import styles from './preview.module.css'

const Preview = ({ note, handlePreview, handleBookmark }) => {
  const previewRef = useRef()
  const useTheme = useThemeContext()

  const { date, title, emotion, text, bookmark } = note

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

  const onClickExit = () => {
    handlePreview(note)
  }

  const onClickBookmark = () => {
    handleBookmark(note.date, note.id)
  }
  return (
    <section ref={previewRef} className={styles.preview} style={bgStyle}>
      <header className={styles.top}>
        <button className={styles.exit} onClick={onClickExit}>
          <BiArrowBack style={fontStyle} />
        </button>
        <p className={styles.date} style={fontStyle}>
          {date}
        </p>
        <button className={styles.bookmark} onClick={onClickBookmark}>
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
