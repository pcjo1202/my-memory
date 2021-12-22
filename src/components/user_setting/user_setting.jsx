import React, { useRef } from 'react'
import HeaderDiary from '../header_diary/header_diary'
import styles from './user_setting.module.css'

const UserSetting = ({ changeTheme }) => {
  const themeRef = useRef()

  const handleTheme = event => {
    themeRef.current = event.target.name
    changeTheme(themeRef.current)
  }

  return (
    <section className={styles.setting}>
      <HeaderDiary name='설정' />
      <div className={styles.theme}>
        <p className={styles.title}>테마선택</p>
        <ul className={styles.theme_list}>
          <li className={styles.theme_item}>
            <button
              name='Default'
              className={`${styles.color} ${styles.default}`}
              onClick={handleTheme}
            />
            <p className={styles.color_name}>Default</p>
          </li>
          <li className={styles.theme_item}>
            <button
              name='Dark'
              className={`${styles.color} ${styles.dark}`}
              onClick={handleTheme}
            />
            <p className={styles.color_name}>Dark</p>
          </li>
          <li className={styles.theme_item}>
            <button
              name='Blue'
              className={`${styles.color} ${styles.blue}`}
              onClick={handleTheme}
            />
            <p className={styles.color_name}>Blue</p>
          </li>
          <li className={styles.theme_item}>
            <button
              name='Green'
              className={`${styles.color} ${styles.green}`}
              onClick={handleTheme}
            />
            <p className={styles.color_name}>Green</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UserSetting
