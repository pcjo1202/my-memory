import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './app'

import { AuthService } from './service/authService'

import '@fortawesome/fontawesome-free/js/all'
import NoteRepository from './service/noteRepository'
import UserData from './service/userData'

// import reportWebVitals from './reportWebVitals'

const authService = new AuthService()
const repository = new NoteRepository()
const userData = new UserData()

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      repository={repository}
      userData={userData}
    />
  </React.StrictMode>,
  document.getElementById('root')
)
// reportWebVitals()
