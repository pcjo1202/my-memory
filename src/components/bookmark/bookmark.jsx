import React from 'react'
import styles from './bookmark.module.css'

import HeaderDiary from '../header_diary/header_diary'
import { useNoteStateContext } from '../../contexts/NoteContext'
import NoteItem from '../note_item/note_item'

/*
note state에 저장되어있는 bookmark: boolean 데이터를 기준으로 true인 데이터만 따로 <NoteItem에 전달해줘야한다.>
이때 객체 ({id: {data}})로 만들어 반복문을 통해 전달하여 코드를 깔끔하게 하자
반환해야하는 객체 의 형태 {1640506964875: {…}, 1640507071658: {…}, 1640507207099: {…}}

 */
const Bookmark = ({ handlePreview }) => {
  const useNoteState = useNoteStateContext()
  const { note, bookmarkId } = useNoteState

  console.log(bookmarkId)
  return (
    <section className={styles.Bookmark}>
      <HeaderDiary name='기억하고 싶은 추억..' />
      <ul className={styles.note_list}>
        {Object.values(bookmarkId).map(val => {
          const { date, id } = val
          return (
            <NoteItem
              key={id}
              note={note[date][id]}
              handlePreview={handlePreview}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Bookmark
