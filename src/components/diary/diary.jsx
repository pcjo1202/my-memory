import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react/cjs/react.development'
import DiaryContainer from '../diary_container/diary_container'
import EditBtn from '../edit_btn/edit_btn'
import HeaderDiary from '../header_diary/header_diary'
import Maker from '../maker/maker'
import Menu from '../menu/menu'
import NoteList from '../note_list/note_list'
import styles from './diary.module.css'

const Diary = ({ authService }) => {
  const tempData = {
    '1': {
      id: '1',
      thumnail: '',
      title: '첫번째'
    },
    '2': {
      id: '2',
      thumnail: '',
      title: '두번째'
    },
    '3': {
      id: '3',
      thumnail: '',
      title: '세번째'
    }
  }

  const [memo, setMemo] = useState(tempData) // 작성한 메모 데이터를 저장
  const [userId, setUserId] = useState(null)
  const navigate = useNavigate()

  useEffect(()=> { //로그인상태를 확인합니다.
    authService.googleGetAuthState(user=>{
      if(user){
        setUserId(user)
        navigate('/diary')

      } else{
        navigate('/')
      }
    })
  },[authService, navigate])

  const contentsRef = useRef()

  const onLogOut = () => {
    authService.googleSignOut()
  }

  const increase = () => {
    contentsRef.current.classList.toggle(`${styles.increase}`)
    console.log(userId)
  }

  useEffect(() => {})
  return (
    <div className={styles.container}>
      <Menu contentsIncrease={increase} onLogOut={onLogOut} />
      {/* <DiaryContainer/> */}
      <section ref={contentsRef} className={styles.contents}>
        <>
          <HeaderDiary />
          <NoteList memo={memo} />
          <EditBtn />
        </>
      </section>
    </div>
  )
}

export default Diary
