/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './app.module.css'
import Diary from './components/diary/diary'
import Main from './components/main/main'
import TitleText from './components/title_text/title_text'

function App ({ authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main authService={authService} />} />
        <Route
          exact
          path='/diary'
          element={<Diary authService={authService} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
