import React from 'react'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../contexts/themeContext'

// import { TiPlus } from 'react-icons/ti'
import styles from './edit_btn.module.css'
const EditBtn = () => {
  const theme = useThemeContext()
  const bgStyle = {
    background: theme ? theme.editor : null
  }
  return (
    <Link to='/maker'>
      <button className={styles.add_btn} style={bgStyle}>
        <i className={`${styles.edit_icon} fas fa-edit`} />
      </button>
    </Link>
  )
}

export default EditBtn
