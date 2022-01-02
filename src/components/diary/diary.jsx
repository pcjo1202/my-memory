import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
// import { useNoteStateContext } from '../../contexts/NoteContext'
import { useThemeContext } from '../../contexts/themeContext'

import DiaryContainer from '../diary_container/diary_container'
import Menu from '../menu/menu'
import Preview from '../preview/preview'
import styles from './diary.module.css'

const Diary = ({ authService }) => {
  const [preview, setPreview] = useState(null) // preveiw를 보여줄 note의 date와 id를 저장
  const contentsRef = useRef() // contens 태그에 접근하기 위해
  const useTheme = useThemeContext()
  // const useNoteState = useNoteStateContext()

  // const { setNote } = useNoteState

  useEffect(
    () => {
      document.body.style.background = useTheme.themeData[useTheme.theme]
        ? useTheme.themeData[useTheme.theme].background
        : null
    },
    [useTheme.theme, useTheme.themeData]
  )
  /* 테마가 바뀔때마다 배경화면의 테마 바꿈 */
  useEffect(
    () => {
      document.body.style.background = useTheme ? useTheme.background : null
    },
    [useTheme]
  )
  const navigate = useNavigate()

  const onLogOut = () => {
    // 로그아웃
    authService.googleSignOut()
    navigate(0)
  }

  const increase = () => {
    // 메뉴버튼을 눌렀을때 늘어나게 하는 함수
    contentsRef.current.classList.toggle(`${styles.increase}`)
  }

  const handlePreview = note => {
    // console.log({ date: note.date, id: note.id })
    if (preview === null) {
      // 활성화 하면서 데이터를 임시로 저장
      setPreview({ date: note.date, id: note.id })
    } else {
      // preview를 끌 때 임시데이터를 삭제함
      setPreview(null)
    }
  }

  return (
    <div className={styles.container}>
      <Menu contentsIncrease={increase} onLogOut={onLogOut} />
      <section ref={contentsRef} className={styles.contents}>
        <DiaryContainer handlePreview={handlePreview} />
        {preview && <Preview preview={preview} handlePreview={handlePreview} />}
      </section>
    </div>
  )
}

export default Diary
