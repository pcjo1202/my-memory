import React from 'react'
import HeaderDiary from '../header_diary/header_diary'
import styles from './maker.module.css'

const Maker = () => {
  return (
    <section className={styles.maker}>
      <header className={styles.header_maker}>
        <button className={styles.back_btn}>
          <i className='fas fa-arrow-left' />
        </button>
        <input className={styles.title_input} type='text' placeholder='제목' />
        <button className={styles.save_btn}>
          <i className='far fa-save' />
        </button>
      </header>
      <div className={styles.textarea_wrapper}>
        <textare name='' cols='30' rows='10' />
      </div>
    </section>
  )
}

export default Maker
