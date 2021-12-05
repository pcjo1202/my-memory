import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './app'
import { AuthService } from './service/authService'
import '@fortawesome/fontawesome-free/js/all'
// import reportWebVitals from './reportWebVitals'

const authService = new AuthService()

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
)
// reportWebVitals()
