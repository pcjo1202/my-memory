/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './app.module.css'
import Diary from './components/diary/diary'
import Main from './components/main/main'
import Maker from './components/maker/maker'

function App ({ authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main authService={authService} />} />
        <Route path='/home' element={<Main authService={authService} />} />
        <Route path='/bookmark' element={<Maker />} />
        <Route path='/folder' element={<Maker />} />
        <Route path='/setting' element={<Maker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
