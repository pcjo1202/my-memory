import React, { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './menu.module.css'

const Menu = ({ contentsIncrease, onLogOut, changePage }) => {
  const wrapperRef = useRef()
  const menuRef = useRef()
  const logoutRef = useRef()
  const homeRef = useRef()
  const bookmarkRef = useRef()
  const folderRef = useRef()

  const subIconRef = useCallback(node => {}, [])

  const increaseMenu = () => {
    wrapperRef.current.classList.toggle(`${styles.increase}`)
    menuRef.current.classList.toggle(`${styles.active}`)
    homeRef.current.classList.toggle(`${styles.onDisplay}`)
    bookmarkRef.current.classList.toggle(`${styles.onDisplay}`)
    folderRef.current.classList.toggle(`${styles.onDisplay}`)
    logoutRef.current.classList.toggle(`${styles.onDisplay}`)
    contentsIncrease()
  }

  return (
    <nav ref={wrapperRef} className={styles.menu_wrapper}>
      <div className={styles.menu_box}>
        <div ref={menuRef} className={styles.menu_icon} onClick={increaseMenu}>
          <i className={`fas fa-angle-double-right ${styles.arrow}`} />
        </div>

        <ul className={styles.sub_icon_list}>
          <li ref={subIconRef} className={styles.sub_icon}>
            <Link to='home' className={styles.sub_icon_box}>
              <i className={`${styles.item_icon} fas fa-home`} />
              <span ref={homeRef} className={styles.icon_text}>
                Home
              </span>
            </Link>
          </li>

          <li ref={subIconRef} className={styles.sub_icon}>
            <Link to='bookmark' className={styles.sub_icon_box}>
              <i className={`${styles.item_icon} fas fa-bookmark`} />
              <span ref={bookmarkRef} className={styles.icon_text}>
                bookmark
              </span>
            </Link>
          </li>

          <li ref={subIconRef} className={styles.sub_icon}>
            <Link to='folder' className={styles.sub_icon_box}>
              <i className={`${styles.item_icon} fas fa-folder`} />
              <span ref={folderRef} className={styles.icon_text}>
                folder
              </span>
            </Link>
          </li>
        </ul>

        <Link
          to='setting'
          className={`${styles.setting_btn} ${styles.sub_icon}`}
        >
          <i className={`${styles.setting_icon} fas fa-user-cog`} />
        </Link>

        <button
          ref={logoutRef}
          className={`${styles.sub_icon} ${styles.logOut_btn}`}
          onClick={onLogOut}
        >
          로그아웃
        </button>
      </div>
    </nav>
  )
}

export default Menu
