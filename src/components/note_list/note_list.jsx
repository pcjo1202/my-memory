import React from 'react'
import NoteItem from '../note_item/note_item'
import styles from './note_list.module.css'
const NoteList = ({ memo }) => {
  return (
    <section className={styles.note_list_wrapper}>
      <ul className={styles.note_list}>
        {Object.keys(memo).map(id => <NoteItem key={id} memo={memo[id]} />)}
      </ul>
    </section>
  )
}

export default NoteList
