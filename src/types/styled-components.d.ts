import { ITheme } from '../styles/themes'

// Declare theme props for all the styled components
declare module 'styled-components' {
    interface DefaultTheme extends ITheme {}
}
