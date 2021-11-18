import React from 'react'
import styles from './btn_blob.module.css'

const BtnBlob = ({ onClickStart }) => {
  return (
    <div className={styles.btn_blob} onClick={onClickStart}>
      <span className={styles.name}>시작하기</span>
      <svg id='visual' viewBox='0 0 900 900' version='1.1'>
        <g transform='translate(351.94600713777214 332.12082535211493)'>
          <path
            d='M487.6 -99.1C547.3 25.2 452.6 258.9 286.9 374.6C121.1 490.3 -115.8 487.8 -226.8 389C-337.8 290.2 -323 95.1 -264.2 -28C-205.4 -151.1 -102.7 -202.1 55.6 -220.2C214 -238.3 428 -223.4 487.6 -99.1'
            fill='rgb(255, 194, 140)'
          />
        </g>
      </svg>
    </div>
  )
}

export default BtnBlob
