import React, { useRef } from 'react'
import { useThemeContext } from '../../contexts/themeContext'
import HeaderDiary from '../header_diary/header_diary'
import styles from './user_setting.module.css'

const UserSetting = ({}) => {
  const themeRef = useRef()
  const useTheme = useThemeContext()

  const handleTheme = event => {
    themeRef.current = event.target.name
    useTheme.setTheme(themeRef.current)
    // changeTheme(themeRef.current)
  }

  const fontStyle = {
    color: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].text
      : null
  }

  // console.log(useTheme.themeData[useTheme.theme])

  return (
    <section className={styles.setting}>
      <HeaderDiary name='설정' />
      <div className={styles.theme}>
        <p className={styles.title} style={fontStyle}>
          테마선택
        </p>
        <ul className={styles.theme_list}>
          <li className={styles.theme_item}>
            <button
              name='Default'
              className={`${styles.color} ${styles.default}`}
              onClick={handleTheme}
            />
            <p className={styles.color_name} style={fontStyle}>
              Default
            </p>
          </li>
          <li className={styles.theme_item}>
            <button
              name='Dark'
              className={`${styles.color} ${styles.dark}`}
              onClick={handleTheme}
            />
            <p className={styles.color_name} style={fontStyle}>
              Dark
            </p>
          </li>
          <li className={styles.theme_item}>
            <button
              name='Blue'
              className={`${styles.color} ${styles.blue}`}
              onClick={handleTheme}
            />
            <p className={styles.color_name} style={fontStyle}>
              Blue
            </p>
          </li>
          <li className={styles.theme_item}>
            <button
              name='Green'
              className={`${styles.color} ${styles.green}`}
              onClick={handleTheme}
            />
            <p className={styles.color_name} style={fontStyle}>
              Green
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UserSetting
