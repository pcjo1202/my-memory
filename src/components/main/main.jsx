import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { ThemeProvider } from '../../contexts/themeContext'
import useFirstRender from '../../hook/useFirstRender'

// components
import BtnBlob from '../btn_blob/btn_blob'
import Diary from '../diary/diary'
import Header from '../header/header'
import LoadingSpinner from '../loading_spinner/loading_spinner'
import Login from '../login/login'
import MainVirtual from '../main_virtual/main_virtual'
import TitleText from '../title_text/title_text'
import styles from './main.module.css'

const Main = ({ authService, repository, userData }) => {
  const [userId, setUserId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState('Default') // setting page에서 설정하는 theme를 여기에 저장
  
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

  const saveTheme = useCallback(
    () => {
      userData.save(userId, theme)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  )

  useFirstRender(saveTheme)

useEffect(
    () => {
      userData.get(userId, data => {
        setTheme(data)
      })
    },
    [userData, userId]
  )

  const onClickStart = () => {
    // 시작하기 버튼을 눌렀을 때 로그인화면 나오게하기
    startRef.current.classList.add(styles.noDisplay)
    loginRef.current.classList.add(styles.onDisplay)
  }

  const changeTheme = color => {
    setTheme(color)
  }

  return (
    <ThemeProvider theme={theme}>
      {userId
        ? <Diary
          authService={authService}
          repository={repository}
          userId={userId}
          changeTheme={changeTheme}
          />
        : <div className={styles.container}>
          <MainVirtual />
          {loading
              ? <LoadingSpinner />
              : <>
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
              </>}
        </div>}
    </ThemeProvider>
  )
}

export default Main
