import React from 'react'
import styles from './menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menu_wrapper}>
      <div className={styles.menu_icon}>
        <div className={styles.menu_hamburger} />
      </div>
      <ul className={styles.sub_icon_list}>
        <li className={styles.sub_icon}>Home</li>
        <li className={styles.sub_icon}>북마크</li>
        <li className={styles.sub_icon}>폴더</li>
      </ul>
      <div className={styles.setting_icon}>
        <div className={styles.setting_btn}>설정</div>
      </div>
    </nav>
  )
}

export default Menu
