import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  // 있는 그대로입니당
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
