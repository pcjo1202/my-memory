import React from 'react'
import { Route, Routes } from 'react-router'
import Bookmark from '../bookmark/bookmark'
import DiaryHome from '../diary_home/diary_home'
import Maker from '../maker/maker'
import UserSetting from '../user_setting/user_setting'

const DiaryContainer = ({
  note,
  onAdd,
  onDelete,
  handlePreview,
  changeTheme
}) => {
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
      {/* <Route path='calendar' element={<Maker />} /> */}
      <Route
        path='/setting'
        element={<UserSetting changeTheme={changeTheme} />}
      />
      <Route path='/maker' element={<Maker onAdd={onAdd} />} />
    </Routes>
  )
}

export default DiaryContainer
