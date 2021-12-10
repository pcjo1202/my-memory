import React from 'react'
import { Link } from 'react-router-dom'
import styles from './edit_btn.module.css'
const EditBtn = () => {
  return (
    <Link to='/maker'>
      <button className={styles.add_btn}>
        <i className={`${styles.edit_icon} fas fa-edit`} />
      </button>
    </Link>
  )
}

export default EditBtn
