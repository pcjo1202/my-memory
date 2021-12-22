import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import ThemeContext, { ThemeProvider } from '../../contexts/themeContext'

import DiaryContainer from '../diary_container/diary_container'
import Menu from '../menu/menu'
import Preview from '../preview/preview'
import styles from './diary.module.css'

const Diary = ({ authService, repository, userId }) => {
  const [note, setNote] = useState({}) // 작성한 메모 데이터를 저장
  const [preview, setPreview] = useState(null)
  const [setting, setSetting] = useState({ theme: 'Default' }) // setting page에서 설정하는 데이터를 여기에 저장

  const firstRender = useRef(true) // 첫번째 렌더링이 끝나면 false로 바꿈
  const contentsRef = useRef() // contens 태그에 접근하기 위해

  useEffect(
    () => {
      repository.getNote(userId, data => {
        setNote(data)
      })
    },
    [repository, userId]
  )

  useEffect(
    () => {
      if (firstRender.current) {
        // 처음 렌터링 될 때 true 값을 false 값으로 바꿈 (처음 렌더링 될때만 동작하지 않음)
        firstRender.current = false
      } else {
        repository.saveNote(userId, note)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [note]
  )
  //

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

  const changeTheme = color => {
    setSetting(prev => ({ ...prev, theme: color }))
  }

  return (
    <ThemeProvider theme={setting.theme}>
      <div className={styles.container}>
        <Menu
          contentsIncrease={increase}
          onLogOut={onLogOut}
          theme={setting.theme}
        />
        <section ref={contentsRef} className={styles.contents}>
          <DiaryContainer
            note={note}
            onAdd={onAdd}
            onDelete={onDelete}
            handlePreview={handlePreview}
            changeTheme={changeTheme}
            theme={setting.theme}
          />
          {preview &&
            <Preview
              note={preview}
              handlePreview={handlePreview}
              theme={setting.theme}
            />}
        </section>
      </div>
    </ThemeProvider>
  )
}

export default Diary
