import React, { useCallback, useEffect, useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_DARK'

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({ isDark: false, toggleTheme: () => null })

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  const handleSetup = useCallback(event=>{
    if(event && event.data && typeof event.data === "string" && event.data.startsWith("[iFrameSizer]message:")){
      const dataStr = event.data.substring("[iFrameSizer]message:".length);
      const data = JSON.parse(dataStr);      
      setIsDark(()=>data.isDark);
    }
  }, []);
  useEffect(()=>{
    window.addEventListener("message", handleSetup);
    return () => {
      window.removeEventListener('message', handleSetup);
    };
  }, [handleSetup]);

  const toggleTheme = () => {
    return false;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={dark}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
