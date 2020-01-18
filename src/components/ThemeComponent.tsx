import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ITheme } from '../styles/themes'

interface IThemeProps {
    theme: ITheme
    children: React.ReactNodeArray
}

const Theme = ({ children, theme }: IThemeProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme
