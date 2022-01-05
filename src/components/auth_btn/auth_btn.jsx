import React from 'react'
import styles from './auth_btn.module.css'

const AuthBtn = ({ onSubminLogin, name }) => {
  const onClickLogin = event => {
    event.preventDefault()
    onSubminLogin(name)
  }
  return (
    <button className={`${styles.btn} ${name}`} onClick={onClickLogin}>
      <img
        className={styles.btn_img}
        src={`image/${name}_login.png`}
        alt={name}
      />
    </button>
  )
}

export default AuthBtn
