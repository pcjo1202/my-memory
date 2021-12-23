import React from 'react'
import { useThemeContext } from '../../contexts/themeContext'
import styles from './header_diary.module.css'

const HeaderDiary = ({ name }) => {
  const theme = useThemeContext()

  const fontStyle = { color: theme ? theme.text : null }
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <p style={fontStyle}>
          {name}
        </p>
      </div>
    </header>
  )
}

export default HeaderDiary
