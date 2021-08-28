import React, { useEffect, useState } from 'react';
import { StatusBar } from "react-native";
import { Appearance, AppearanceProvider } from "react-native-appearance";
import { ThemeContext, ThemeProvider } from "styled-components/native";
import darkTheme from './dark';
import lightTheme from './light';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ManageThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useState(defaultMode)
    const setMode = mode => {
      setThemeState(mode)
      AsyncStorage.setItem('theme', mode)
    }
    useEffect(() => {
      AsyncStorage.getItem('theme').then(value => {
        if(value){
          setMode(value)
        }
      })
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        setThemeState(colorScheme)
      })
      return () => subscription.remove()
    }, [])
    return (
      <ThemeContext.Provider value={{ mode: themeState, setMode }}>
        <ThemeProvider
          theme={themeState === 'dark' ? darkTheme.theme : lightTheme.theme}>
          <>
            <StatusBar
              barStyle={themeState === 'dark' ? 'dark-content' : 'light-content'}
            />
            {children}
          </>
        </ThemeProvider>
      </ThemeContext.Provider>
    )
  }
 
export const useTheme = () => React.useContext(ThemeContext)
 
const defaultMode = Appearance.getColorScheme() || 'light'

const ThemeManager = ({ children }) => (
    <AppearanceProvider>
      <ManageThemeProvider>{children}</ManageThemeProvider>
    </AppearanceProvider>
  )
  
export default ThemeManager