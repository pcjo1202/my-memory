import React from 'react'
import { Route, Routes } from 'react-router'
import Bookmark from '../bookmark/bookmark'
import DiaryHome from '../diary_home/diary_home'
import Maker from '../maker/maker'

const DiaryContainer = ({ note, onAdd, onDelete, handlePreview }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <DiaryHome
            note={note}
            onDelete={onDelete}
            handlePreview={handlePreview}
          />
        }
      />
      <Route path='/bookmark' element={<Bookmark />} />
      {/* <Route path='calendar' element={<Maker />} />
      <Route path='/setting' element={<Maker />} /> */}
      <Route path='/maker' element={<Maker onAdd={onAdd} />} />
    </Routes>
  )
}

export default DiaryContainer
