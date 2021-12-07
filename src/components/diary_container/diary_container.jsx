import React from 'react'
import { Route, Routes } from 'react-router'
import Diary from '../diary/diary'

const DiaryContainer = () => {
  return (
    <Routes>
      <Route path='/home' element={<Diary />} />
      <Route path='/bookmark' element={<Diary />} />
      <Route path='/folder' element={<Diary />} />
      <Route path='/setting' element={<Diary />} />
    </Routes>
  )
}

export default DiaryContainer
