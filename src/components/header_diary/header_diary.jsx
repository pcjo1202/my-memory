import React from 'react'
import { useThemeContext } from '../../contexts/themeContext'
import styles from './header_diary.module.css'

const HeaderDiary = React.memo(({ name }) => {
  const useTheme = useThemeContext()

  const fontStyle = {
    color: useTheme.themeData[useTheme.theme]
      ? useTheme.themeData[useTheme.theme].text
      : null
  }
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <p style={fontStyle}>
          {name}
        </p>
      </div>
    </header>
  )
})

export default HeaderDiary
