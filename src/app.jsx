import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './app.module.css'
import Diary from './components/diary/diary'
import Login from './components/login/login'
import Main from './components/main/main'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/diary' element={<Diary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
