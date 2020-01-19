import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStoreState } from 'easy-peasy'

interface IThemeProps {
    children: React.ReactNodeArray
}

const ThemeContainer = ({ children }: IThemeProps) => {
  const currentTheme = useStoreState(state => state.theme.currentTheme)
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}

export default ThemeContainer
