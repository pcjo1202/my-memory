import { createContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

const themeData = {
  Dark: {
    menu: '#696969'
  },
  Blue: {
    menu: '#4682B4'
  },
  Green: {
    menu: '#6DA983'
  }
}

const ThemeContext = createContext(themeData)

export const ThemeProvider = ({ children, theme }) => {
  const [themes, setThemes] = useState({
    [theme]: {
      menu: '#696969'
    }
  })

  console.log(themes)
  useEffect(() => {
    setThemes(prev => {
      const update = { ...prev, [theme]: themeData.Dark }
      return update
    })
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
