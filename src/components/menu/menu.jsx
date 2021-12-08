import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './menu.module.css'

const Menu = ({ contentsIncrease, onLogOut }) => {
  const wrapperRef = useRef()
  const menuRef = useRef()
  const iconTextRef = useRef()
  const logoutRef = useRef()

  const [subIcon, setSubIcon] = useState([
    'home',
    'bookmark',
    'folder'
    // 'setting'
  ])

  const increaseMenu = () => {
    wrapperRef.current.classList.toggle(`${styles.increase}`)
    menuRef.current.classList.toggle(`${styles.active}`)
    iconTextRef.current.classList.toggle(`${styles.onDisplay}`)
    logoutRef.current.classList.toggle(`${styles.onDisplay}`)
    contentsIncrease()
  }

  return (
    <nav ref={wrapperRef} className={styles.menu_wrapper}>
      <div className={styles.menu_box}>
        <div ref={menuRef} className={styles.menu_icon} onClick={increaseMenu}>
          <div className={styles.menu_hamburger} />
        </div>

        <ul className={styles.sub_icon_list}>
          {subIcon.map(item => {
            return (
              <li className={styles.sub_icon}>
                <Link to={`/${item}`} className={styles.sub_icon_link}>
                  <i className={`${styles.item_icon} fas fa-${item}`} />
                  <span ref={iconTextRef} className={styles.icon_text}>
                    {item}
                  </span>
                </Link>
              </li>
            )
          })}
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
