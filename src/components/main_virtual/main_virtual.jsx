import React from 'react'
import styles from './main_virtual.module.css'

const MainVirtual = props => {
  return (
    <article className={styles.main_virtual}>
      <div
        className={`${styles.custom_shape_divider_bottom_1637135735} ${styles.svg_background}`}
      >
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className={styles.shape_fill}
          />
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className={styles.shape_fill}
          />
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className={styles.shape_fill}
          />
        </svg>
      </div>
      <div className={styles.btn_blob}>
        <span className={styles.name}>시작하기</span>
        <svg id='visual' viewBox='0 0 900 600' version='1.1'>
          <g transform='translate(478.70656561796346 293.4698584727781)'>
            <path
              d='M101.2 -116C131.7 -70.7 157.4 -35.4 174.2 16.9C191.1 69.1 199.1 138.1 168.6 184C138.1 229.8 69.1 252.4 16.7 235.7C-35.6 218.9 -71.2 162.8 -121.2 117C-171.2 71.2 -235.6 35.6 -245.3 -9.7C-254.9 -54.9 -209.8 -109.8 -159.8 -155.2C-109.8 -200.5 -54.9 -236.3 -9.8 -226.5C35.4 -216.7 70.7 -161.4 101.2 -116'
              fill='#FF6F61'
            />
          </g>
        </svg>
      </div>
      <div className={styles.title_text}>
        <p className={styles.title}>하루를 기록</p>
        <p className={styles.sub}>당신의 하루를 기록해보세요</p>
      </div>
    </article>
  )
}

export default MainVirtual
