import React, { useRef } from 'react'
import styles from './menu.module.css'

const Menu = () => {
  const wrapperRef = useRef()
  const menuRef = useRef()

  const increaseMenu = () => {
    wrapperRef.current.classList.toggle(`${styles.increase}`)
    menuRef.current.classList.toggle(`${styles.active}`)
    console.log(menuRef.current)
    console.log(wrapperRef.current)
  }

  return (
    <nav ref={wrapperRef} className={styles.menu_wrapper}>
      <div ref={menuRef} className={styles.menu_icon} onClick={increaseMenu}>
        <div className={styles.menu_hamburger} />
      </div>
      <ul className={styles.sub_icon_list}>
        <li className={styles.sub_icon}>
          <i className={`${styles.home_icon} fas fa-home`} />
        </li>
        <li className={styles.sub_icon}>
          <i className={`${styles.bookmark_icon} far fa-bookmark`} />
        </li>
        <li className={styles.sub_icon}>
          <i className={`${styles.folder_icon} far fa-folder`} />
        </li>
      </ul>
      <div className={`${styles.setting_btn} ${styles.sub_icon}`}>
        <i className={`${styles.setting_icon} fas fa-user-cog`} />
      </div>
    </nav>
  )
}

export default Menu
