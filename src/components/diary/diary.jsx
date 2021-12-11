import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react/cjs/react.development'
import DiaryContainer from '../diary_container/diary_container'
import Menu from '../menu/menu'
import styles from './diary.module.css'

const Diary = ({ authService }) => {
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
    setNote(() => {
      const update = { ...note }
      update[data.id] = data
      return update
    })

    console.log(note)
  }

  return (
    <div className={styles.container}>
      <Menu contentsIncrease={increase} onLogOut={onLogOut} />
      <section ref={contentsRef} className={styles.contents}>
        <DiaryContainer note={note} onAdd={onAdd} />
        {/* <DiaryHome note={note} /> */}
      </section>
    </div>
  )
}

export default Diary
