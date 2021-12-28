import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import useFirstRender from '../hook/useFirstRender'

export const ThemeContext = createContext()

const ThemeProvider = ({ children, userData, userId, themes }) => {
  const [theme, setTheme] = useState('Default') // setting page에서 설정하는 theme를 여기에 저장

  useEffect(
    () => {
      userData.get(userId, data => {
        setTheme(data)
      })
    },
    [userData, userId]
  )

  const saveTheme = useCallback(
    () => {
      userData.save(userId, theme)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  )

  useFirstRender(saveTheme)

  const themeData = {
    Dark: {
      menu: '#373737',
      background: '#232222',
      icon: '#d1d1d1',
      text: '#ddd',
      preview: '#505050',
      editor: '#b1b1b1'
    },
    Blue: {
      menu: '#0d75b7',
      background: '#a8e5ff',
      icon: '#ebebeb',
      text: '#2b2b2b',
      preview: '#0077bc33',
      editor: '#009fff'
    },
    Green: {
      menu: '#325930',
      background: '#c2dfc8',
      icon: '#e6e6e6',
      text: '#3c4136',
      preview: '#47a52b3d',
      editor: '#13a328'
    }
  }

  const themeContextValue = {
    themeData,
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

export { ThemeProvider, useThemeContext }
