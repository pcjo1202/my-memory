import React, { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../contexts/themeContext'
import styles from './menu.module.css'

const Menu = ({ contentsIncrease, onLogOut }) => {
  const wrapperRef = useRef()
  const menuRef = useRef()
  const logoutRef = useRef()
  const homeRef = useRef()
  const bookmarkRef = useRef()
  const calenderRef = useRef()

  const useTheme = useThemeContext()

  const increaseMenu = useCallback(
    () => {
      wrapperRef.current.classList.toggle(`${styles.increase}`)
      menuRef.current.classList.toggle(`${styles.active}`)
      homeRef.current.classList.toggle(`${styles.onDisplay}`)
      bookmarkRef.current.classList.toggle(`${styles.onDisplay}`)
      calenderRef.current.classList.toggle(`${styles.onDisplay}`)
      logoutRef.current.classList.toggle(`${styles.onDisplay}`)
      contentsIncrease()
    },
    [contentsIncrease]
  )

  const menuStyle = {
    background: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].menu
      : null
  }

  const iconStyle = {
    color: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].icon
      : null
  }

  return (
    <nav
      ref={wrapperRef}
      className={`${styles.menu_wrapper} ${styles.theme}`}
      style={menuStyle}
    >
      <div className={styles.menu_box}>
        <div ref={menuRef} className={styles.menu_icon} onClick={increaseMenu}>
          <i className={`fas fa-angle-double-right ${styles.arrow}`} />
        </div>

        <ul className={styles.sub_icon_list}>
          <li className={styles.sub_icon} style={iconStyle}>
            <Link to='/' className={styles.sub_icon_box}>
              <i className={`${styles.item_icon} fas fa-home`} />
              <span ref={homeRef} className={styles.icon_text}>
                Home
              </span>
            </Link>
          </li>

          <li className={styles.sub_icon} style={iconStyle}>
            <Link to='bookmark' className={styles.sub_icon_box}>
              <i className={`${styles.item_icon} fas fa-bookmark`} />
              <span ref={bookmarkRef} className={styles.icon_text}>
                bookmark
              </span>
            </Link>
          </li>

          <li className={styles.sub_icon} style={iconStyle}>
            <Link to='calendar' className={styles.sub_icon_box}>
              <i className={`${styles.item_icon} fas fa-calendar-alt`} />
              <span ref={calenderRef} className={styles.icon_text}>
                calender
              </span>
            </Link>
          </li>
        </ul>

        <Link
          to='setting'
          className={`${styles.setting_btn} ${styles.sub_icon}`}
          style={iconStyle}
        >
          <i className={`${styles.setting_icon} fas fa-user-cog`} />
        </Link>

        <button
          ref={logoutRef}
          className={`${styles.sub_icon} ${styles.logOut_btn}`}
          onClick={onLogOut}
          style={iconStyle}
        >
          ????????????
        </button>
      </div>
    </nav>
  )
}

export default Menu
