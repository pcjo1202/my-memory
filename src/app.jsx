import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './app.module.css'
import Main from './components/main/main'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
