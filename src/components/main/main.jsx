import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

// components
import BtnBlob from '../btn_blob/btn_blob'
import Diary from '../diary/diary'
import Header from '../header/header'
import LoadingSpinner from '../loading_spinner/loading_spinner'
import Login from '../login/login'
import MainVirtual from '../main_virtual/main_virtual'
import TitleText from '../title_text/title_text'
import styles from './main.module.css'

const Main = ({ authService, repository }) => {
  const [userId, setUserId] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const startRef = useRef()
  const loginRef = useRef()

  useEffect(
    () => {
      setLoading(true)
      authService.googleGetAuthState(user => {
        if (user) {
          setUserId(user.uid)
          // navigate('/')
        } else {
          setLoading(false)
        }
      })

      return () => {}
    },
    [authService, navigate, userId]
  )

  const onClickStart = () => {
    // 시작하기 버튼을 눌렀을 때 로그인화면 나오게하기
    startRef.current.classList.add(styles.noDisplay)
    loginRef.current.classList.add(styles.onDisplay)
  }

  return (
    <div>
      {userId
        ? <Diary authService={authService} repository={repository} userId={userId}/>
        : <div className={styles.container}>
          <MainVirtual />
          {loading
              ? <LoadingSpinner />
              : 
              <>
                <Header />
                <section className={styles.content}>
                  <div ref={startRef} className={styles.start}>
                    <TitleText />
                    <BtnBlob onClickStart={onClickStart} />
                  </div>
                  <div ref={loginRef} className={styles.login_box}>
                    <Login authService={authService} />
                  </div>
                </section>
              </>
              }
        </div>}
    </div>
  )
}

export default Main
