import React from 'react'
import styles from './edit_btn.module.css'
const AddBtn = () => {
  return (
    <button className={styles.add_btn}>
      <i className={`${styles.edit_icon} fas fa-edit`} />
    </button>
  )
}

export default AddBtn
