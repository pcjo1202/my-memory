/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './header.module.css'

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles.header_holder}>
        <h1 className={styles.logo}>
          <a href='' className={styles.logo_a}>
            <img src='/image/logo_transparent.png' alt='하루를 기록' />
          </a>
        </h1>
        <div className={styles.about}>ABOUT</div>
      </div>
    </header>
  )
}

export default Header
