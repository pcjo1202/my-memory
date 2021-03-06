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
      1: 'đ',
      2: 'đ',
      3: 'đĨ°',
      4: 'đ'
    }

    const note = {
      id: Date.now(),
      title: titleRef.current.value || 'ė ëĒŠėė',
      text: noteRef.current.value || 'ë´ėŠėė',
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

    return `${year}ë ${month}ė ${day}ėŧ`
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
          placeholder='ė ëĒŠ'
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
            placeholder='#ėŧę¸° #ë§Ĩëļ #ėš´í'
          />
        </div>
        <select ref={emotionRef} className={styles.emote}>
          <option value='0'>ė¤ëė ę°ė </option>
          <option value='1'>đ</option>
          <option value='2'>đ</option>
          <option value='3'>đĨ°</option>
          <option value='3'>đ</option>
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
