/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './app.module.css'
import Diary from './components/diary/diary'
import Main from './components/main/main'
import Maker from './components/maker/maker'

function App ({ authService, repository }) {
  return (
    <BrowserRouter>
      <Main authService={authService} repository={repository} />
      {/* <Routes>
        <Route exact path='/' element={<Main authService={authService} />} />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
