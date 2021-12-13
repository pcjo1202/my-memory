import React from 'react'
import NoteItem from '../note_item/note_item'
import styles from './note_list.module.css'
const NoteList = ({ note }) => {
  return (
    <section className={styles.note_list_wrapper}>
      <ul className={styles.note_list}>
        {note &&
          Object.keys(note).map(id => <NoteItem key={id} note={note[id]} />)}
      </ul>
    </section>
  )
}

export default NoteList
