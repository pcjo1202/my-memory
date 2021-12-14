import React from 'react'
import { Route, Routes } from 'react-router'
import Bookmark from '../bookmark/bookmark'
import DiaryHome from '../diary_home/diary_home'
import Maker from '../maker/maker'

const DiaryContainer = ({ note, onAdd, onDelete }) => {
  return (
    <Routes>
      <Route path='/' element={<DiaryHome note={note} onDelete={onDelete} />} />
      <Route path='/bookmark' element={<Bookmark />} />
      {/* <Route path='folder' element={<Maker />} />
      <Route path='/setting' element={<Maker />} /> */}
      <Route path='/maker' element={<Maker onAdd={onAdd} />} />
    </Routes>
  )
}

export default DiaryContainer
