import React from 'react'
import styles from './title_text.module.css'
const TitleText = props => {
  return (
    <div className={styles.title_text}>
      <p className={styles.title}>하루를 기록</p>
      <p className={styles.sub}>당신의 하루를 기록해보세요</p>
    </div>
  )
}

export default TitleText
