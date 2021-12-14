import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react/cjs/react.development'
import DiaryContainer from '../diary_container/diary_container'
import Menu from '../menu/menu'
import styles from './diary.module.css'

const Diary = ({ authService, repository, userId }) => {
  // const tempData = {
  //   '1': {
  //     id: Date.now(),
  //     title: '',
  //     note: '',
  //     hashtag: '',
  //     emotion: '',
  //     date: '',
  //     bookmark: true
  //   }
  // }

  const [note, setNote] = useState({}) // 작성한 메모 데이터를 저장

  useEffect(
    () => {
      repository.syncNote(userId, note => {
        setNote(note)
      })
    },
    [repository, userId]
  )

  // useEffect(
  //   () => {
  //     repository.saveNote(userId, note)
  //   },
  //   [note]
  // )

  const navigate = useNavigate()

  const contentsRef = useRef()

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
    setNote(note => {
      const update = { ...note }
      update[data.id] = data
      return update
    })
    repository.saveNote(userId, note)
  }

  const onDelete = data => {
    setNote(note => {
      const update = { ...note }
      delete update[data.id]
      return update
    })
    repository.saveNote(userId, note)
  }

  return (
    <div className={styles.container}>
      <Menu contentsIncrease={increase} onLogOut={onLogOut} />
      <section ref={contentsRef} className={styles.contents}>
        <DiaryContainer note={note} onAdd={onAdd} onDelete={onDelete} />
        {/* <DiaryHome note={note} /> */}
      </section>
    </div>
  )
}

export default Diary
