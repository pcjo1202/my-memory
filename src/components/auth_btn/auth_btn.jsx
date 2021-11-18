import React from 'react'
import styles from './auth_btn.module.css'

const AuthBtn = ({ onSubminLogin, name }) => {
  return (
    <button className={`${styles.btn} ${name}`} onClick={onSubminLogin}>
      <img src='image/btn_google.svg' alt='' />
    </button>
  )
}

export default AuthBtn
