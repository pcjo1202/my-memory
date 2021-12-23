import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useThemeContext } from '../../contexts/themeContext'
import useFirstRender from '../../hook/useFirstRender'

import DiaryContainer from '../diary_container/diary_container'
import Menu from '../menu/menu'
import Preview from '../preview/preview'
import styles from './diary.module.css'

const Diary = ({ authService, repository, userId, changeTheme }) => {
  const [note, setNote] = useState({}) // 작성한 메모 데이터를 저장
  const [preview, setPreview] = useState(null)

  // const firstRender = useRef(true) // 첫번째 렌더링이 끝나면 false로 바꿈
  const contentsRef = useRef() // contens 태그에 접근하기 위해

  const theme = useThemeContext()

  useEffect(
    () => {
      repository.getNote(userId, data => {
        setNote(data)
      })
    },
    [repository, userId]
  )

  const saveNote = useCallback(
    () => {
      repository.saveNote(userId, note)
      console.log('서버에 저장')
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [note]
  )
  useFirstRender(saveNote)

  // useEffect(
  //   () => {
  //     if (firstRender.current) {
  //       // 처음 렌터링 될 때 true 값을 false 값으로 바꿈 (처음 렌더링 될때만 동작하지 않음)
  //       firstRender.current = false
  //     } else {
  //       repository.saveNote(userId, note)
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [note]
  // )

  useEffect(
    () => {
      document.body.style.background = theme ? theme.background : null
    },
    [theme]
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

  const onAdd = data => {
    setNote(notes => {
      const update = { ...notes }
      const innerData = update[data.date]
      update[data.date] = { ...innerData, [data.id]: data }
      return update
    })
  }

  const onDelete = data => {
    setNote(note => {
      const update = { ...note }
      delete update[data.id]
      return update
    })
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

  return (
    <div className={styles.container}>
      <Menu contentsIncrease={increase} onLogOut={onLogOut} />
      <section ref={contentsRef} className={styles.contents}>
        <DiaryContainer
          note={note}
          onAdd={onAdd}
          onDelete={onDelete}
          handlePreview={handlePreview}
          changeTheme={changeTheme}
        />
        {preview && <Preview note={preview} handlePreview={handlePreview} />}
      </section>
    </div>
  )
}

export default Diary
