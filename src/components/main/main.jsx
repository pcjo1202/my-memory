import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import BtnBlob from '../btn_blob/btn_blob'
import Header from '../header/header'
import MainVirtual from '../main_virtual/main_virtual'
import TitleText from '../title_text/title_text'
import styles from './main.module.css'

const Main = props => {
  const [userId, setUserId] = useState()
  const navigate = useNavigate()
  const contentRef = useRef()
  useEffect(() => {
    if (!userId) {
      console.log('userId 없음')
    } else {
      navigate('/diary')
      console.log('diary로 들어옴')
    }
  }, [])

  const onClickStart = () => {
    const style = styles.noDisplay
    // console.log()
    contentRef.current.classList.add(style)
  }

  return (
    <div className={styles.container}>
      <MainVirtual />
      <Header />
      <div ref={contentRef} className={styles.content}>
        <TitleText />
        <BtnBlob onClickStart={onClickStart} />
      </div>
    </div>
  )
}

export default Main
