import { createContext, useContext } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children, theme }) => {
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

  return (
    <ThemeContext.Provider value={themeData[theme]}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

export { ThemeProvider, useThemeContext }
