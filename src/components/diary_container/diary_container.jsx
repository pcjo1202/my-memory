import React from 'react'
import { Route, Routes } from 'react-router'
import Bookmark from '../bookmark/bookmark'
import DiaryHome from '../diary_home/diary_home'
import Maker from '../maker/maker'
import UserSetting from '../user_setting/user_setting'

const DiaryContainer = ({ handlePreview }) => {
  return (
    <Routes>
      <Route path='/' element={<DiaryHome handlePreview={handlePreview} />} />
      <Route
        path='/bookmark'
        element={<Bookmark handlePreview={handlePreview} />}
      />
      {/* <Route path='calendar' element={<Maker />} /> */}
      <Route path='/setting' element={<UserSetting />} />
      <Route path='/maker' element={<Maker />} />
    </Routes>
  )
}

export default DiaryContainer
