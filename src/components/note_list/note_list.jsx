import React from 'react'
import NoteItem from '../note_item/note_item'
import styles from './note_list.module.css'
const NoteList = () => {
  return (
    <section className={styles.note_list_wrapper}>
      <ul className={styles.note_list}>
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </ul>
    </section>
  )
}

export default NoteList
