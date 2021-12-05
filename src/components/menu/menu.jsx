import React from 'react'
import styles from './menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menu_wrapper}>
      <div className={styles.menu_icon}>
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
