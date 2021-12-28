import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import { useNoteStateContext } from '../../contexts/NoteContext'
import styles from './maker.module.css'

const Maker = () => {
  const useNoteState = useNoteStateContext()
  const { onAdd } = useNoteState

  const noteRef = useRef()
  const titleRef = useRef()
  const emotionRef = useRef()
  const hashtagRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    const hashtagArr = hashtagRef.current.value.split('#').splice(1)
    const emote = {
      1: '😆',
      2: '😂',
      3: '🥰',
      4: '😐'
    }

    const note = {
      id: Date.now(),
      title: titleRef.current.value || '제목없음',
      text: noteRef.current.value || '내용없음',
      hashtag: hashtagArr || '',
      emotion: emote[emotionRef.current.value] || '',
      date: setDate(),
      bookmark: false
    }

    onAdd(note)
    navigate('/')
  }

  const setDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return `${year}년 ${month}월 ${day}일`
  }

  const goBack = () => {
    navigate('/')
  }

  return (
    <form className={styles.maker}>
      {/* goBack, title and save */}
      <header className={styles.header_maker}>
        <button className={styles.icon_wrapper} onClick={goBack}>
          <i className={`${styles.icon} fas fa-arrow-left`} />
        </button>
        <input
          ref={titleRef}
          className={styles.title_input}
          type='text'
          placeholder='제목'
        />
        <button className={styles.icon_wrapper} onClick={handleSubmit}>
          <i className={`${styles.icon} far fa-save`} />
        </button>
      </header>
      {/* hashtag and emotion */}
      <div className={styles.subData}>
        <div className={styles.hashtag}>
          <input
            ref={hashtagRef}
            className={styles.hashtag_input}
            type='text'
            placeholder='#일기 #맥북 #카페'
          />
        </div>
        <select ref={emotionRef} className={styles.emote}>
          <option value='0'>오늘의 감정</option>
          <option value='1'>😆</option>
          <option value='2'>😂</option>
          <option value='3'>🥰</option>
          <option value='3'>😐</option>
        </select>
      </div>
      {/* main text */}
      <div className={styles.textarea_wrapper}>
        <textarea
          ref={noteRef}
          name='memoText'
          placeholder='This is a description.'
        />
      </div>
    </form>
  )
}

export default Maker
