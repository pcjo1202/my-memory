import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import BtnBlob from '../btn_blob/btn_blob'
import Header from '../header/header'
import Login from '../login/login'
import MainVirtual from '../main_virtual/main_virtual'
import TitleText from '../title_text/title_text'
import styles from './main.module.css'

const Main = props => {
  const [userId, setUserId] = useState()
  const [goLogin, setGoLogin] = useState(false)

  const navigate = useNavigate()
  const startRef = useRef()
  const loginRef = useRef()

  useEffect(() => {
    if (!userId) {
    } else {
      navigate('/diary')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickStart = () => {
    startRef.current.classList.add(styles.noDisplay)
    loginRef.current.classList.add(styles.onDisplay)
  }

  const onLogin = () => {}
  return (
    <div className={styles.container}>
      <MainVirtual />
      <Header />
      <section className={styles.content}>
        <div ref={startRef} className={styles.start}>
          <TitleText />
          <BtnBlob onClickStart={onClickStart} />
        </div>
        <div ref={loginRef} className={styles.login_box}>
          <Login onLogin={onLogin} />
        </div>
      </section>
    </div>
  )
}

export default Main
