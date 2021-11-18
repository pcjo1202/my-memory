import React from 'react'
import Header from '../header/header'
import MainVirtual from '../main_virtual/main_virtual'
import styles from './main.module.css'

const Main = props => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <MainVirtual />
        <div className={styles.textarea}>
          {}
        </div>
      </div>
    </div>
  )
}

export default Main
