import React, { useRef } from 'react'
import styles from './preview.module.css'

const Preview = ({ note, handlePreview, theme }) => {
  const previewRef = useRef()

  const onClickExit = () => {
    handlePreview(note)
  }
  return (
    <section ref={previewRef} className={styles.preview}>
      <header className={styles.top}>
        <p className={styles.date}>
          {note.date}
        </p>
        <button className={styles.exit} onClick={onClickExit}>
          X
        </button>
      </header>
      <div className={styles.second}>
        <div className={styles.title}>
          {note.title}
        </div>
        <div className={styles.emotion}>
          {note.emotion}
        </div>
      </div>
      <div className={styles.text}>
        {note.text}
      </div>
    </section>
  )
}

export default Preview
