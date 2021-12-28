import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useThemeContext } from '../../contexts/themeContext'

import DiaryContainer from '../diary_container/diary_container'
import Menu from '../menu/menu'
import Preview from '../preview/preview'
import styles from './diary.module.css'

const Diary = ({ authService }) => {
  const [note, setNote] = useState({}) // 작성한 메모 데이터를 저장
  const [preview, setPreview] = useState(null)

  const contentsRef = useRef() // contens 태그에 접근하기 위해

  const useTheme = useThemeContext()

  useEffect(
    () => {
      document.body.style.background = useTheme.themeData[useTheme.theme]
        ? useTheme.themeData[useTheme.theme].background
        : null
    },
    [useTheme.theme, useTheme.themeData]
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
    if (preview === null) {
      // 활성화 하면서 데이터를 임시로 저장
      setPreview(note)
    } else {
      // preview를 끌 때 임시데이터를 삭제함
      setPreview(null)
    }
  }

  const handleBookmark = (date, id) => {
    setNote(note => {
      const update = { ...note }
      const bookmark = update[date][id].bookmark
      !bookmark
        ? (update[date][id].bookmark = false)
        : (update[date][id].bookmark = true)
      return update
    })

    setPreview(note => {
      const update = { ...note }
      const bookmark = update.bookmark
      !bookmark ? (update.bookmark = true) : (update.bookmark = false)
      return update
    })
  }

  return (
    <div className={styles.container}>
      <Menu contentsIncrease={increase} onLogOut={onLogOut} />
      <section ref={contentsRef} className={styles.contents}>
        <DiaryContainer note={note} handlePreview={handlePreview} />
        {preview &&
          <Preview
            note={preview}
            handlePreview={handlePreview}
            handleBookmark={handleBookmark}
          />}
      </section>
    </div>
  )
}

export default Diary
