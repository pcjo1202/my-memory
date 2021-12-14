import React from 'react'
import NoteItem from '../note_item/note_item'
import styles from './note_list.module.css'
const NoteList = ({ note, onDelete }) => {
  return (
    <section className={styles.note_list_wrapper}>
      <ul className={styles.note_list}>
        {note
          ? Object.keys(note).map(id =>
            <NoteItem key={id} note={note[id]} onDelete={onDelete} />
            )
          : <h1 className={styles.noItem}>당신의 하루를 남겨보세요😍</h1>}
      </ul>
    </section>
  )
}
export default NoteList
