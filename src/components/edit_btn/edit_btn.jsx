import React from 'react'
import { Link } from 'react-router-dom'

// import { TiPlus } from 'react-icons/ti'
import styles from './edit_btn.module.css'
const EditBtn = () => {
  return (
    <Link to='/maker'>
      <button className={styles.add_btn}>
        {/* <TiPlus className={styles.edit_icon}/> */}
        <i className={`${styles.edit_icon} fas fa-edit`} />
      </button>
    </Link>
  )
}

export default EditBtn
