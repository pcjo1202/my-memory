import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react/cjs/react.development'
import DiaryContainer from '../diary_container/diary_container'
import Menu from '../menu/menu'
import styles from './diary.module.css'

const Diary = ({ authService, repository, userId }) => {
  const [note, setNote] = useState({}) // 작성한 메모 데이터를 저장
  const [loding, setLoding] = useState(false)

  const firstRender = useRef(true) // 첫번째 렌더링이 끝나면 false로 바꿈

  const contentsRef = useRef()

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
      update[data.id] = data
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

  return (
    <div className={styles.container}>
      <Menu contentsIncrease={increase} onLogOut={onLogOut} />
      <section ref={contentsRef} className={styles.contents}>
        <DiaryContainer
          note={note}
          onAdd={onAdd}
          onDelete={onDelete}
          lodingState={loding}
        />
      </section>
    </div>
  )
}

export default Diary
