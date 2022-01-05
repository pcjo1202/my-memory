import React from 'react'
import AuthBtn from '../auth_btn/auth_btn'
import styles from './login.module.css'

const Login = ({ authService }) => {
  const onSubminLogin = name => {
    switch (name) {
      case 'google':
        console.log(name)
        authService //
          .googleAuth()
        break

      default:
    }
  }

  return (
    <div className={styles.login_container}>
      <form className={styles.login_form}>
        <input className={styles.id} type='text' placeholder='아이디 입력' />
        <input className={styles.password} type='password' placeholder='비밀번호' />
        <button className={styles.login_btn}>로그인</button>
        <section className={styles.otherAuth_btn}>
          <AuthBtn onSubminLogin={onSubminLogin} name='google' />
        </section>
      </form>
    </div>
  )
}

export default Login
