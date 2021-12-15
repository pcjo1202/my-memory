import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './app'

import { AuthService } from './service/authService'

import '@fortawesome/fontawesome-free/js/all'
import NoteRepository from './service/noteRepository'

// import reportWebVitals from './reportWebVitals'

const authService = new AuthService()
const repository = new NoteRepository()

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} repository={repository} />
  </React.StrictMode>,
  document.getElementById('root')
)
// reportWebVitals()
