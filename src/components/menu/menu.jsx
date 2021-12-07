import React, { useRef } from 'react'
import styles from './menu.module.css'

const Menu = ({ contentsIncrease }) => {
  const wrapperRef = useRef()
  const menuRef = useRef()

  const increaseMenu = () => {
    wrapperRef.current.classList.toggle(`${styles.increase}`)
    menuRef.current.classList.toggle(`${styles.active}`)
    contentsIncrease()
  }

  return (
    <nav ref={wrapperRef} className={styles.menu_wrapper}>
      <div className={styles.menu_box}>
        <div ref={menuRef} className={styles.menu_icon} onClick={increaseMenu}>
          <div className={styles.menu_hamburger} />
        </div>

        <ul className={styles.sub_icon_list}>
          <li className={styles.sub_icon}>
            <i className={`${styles.home_icon} fas fa-home`} />
            <span className={styles.icon_text}>Home</span>
          </li>
          <li className={styles.sub_icon}>
            <i className={`${styles.bookmark_icon} far fa-bookmark`} />
            <span className={styles.icon_text}>Bookmark</span>
          </li>
          <li className={styles.sub_icon}>
            <i className={`${styles.folder_icon} far fa-folder`} />
            <span className={styles.icon_text}>Folder</span>
          </li>
        </ul>

        <div className={`${styles.setting_btn} ${styles.sub_icon}`}>
          <i className={`${styles.setting_icon} fas fa-user-cog`} />
        </div>
      </div>
    </nav>
  )
}

export default Menu
