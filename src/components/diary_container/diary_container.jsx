import React from 'react'
import { Route, Routes } from 'react-router'
import Bookmark from '../bookmark/bookmark'
import Diary from '../diary/diary'
import DiaryHome from '../diary_home/diary_home'
import Maker from '../maker/maker'

const DiaryContainer = ({ memo }) => {
  return (
    <Routes>
      <Route path='/' element={<DiaryHome memo={memo} />} />
      <Route path='/home' element={<DiaryHome memo={memo} />} />
      <Route path='/bookmark' element={<Bookmark />} />
      {/* <Route path='folder' element={<Maker />} />
      <Route path='/setting' element={<Maker />} /> */}
      <Route path='maker' element={<Maker />} />
    </Routes>
  )
}

export default DiaryContainer
