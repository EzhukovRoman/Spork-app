interface IColors {
  bg: string,
  bgDark: string,
  bgAccent: string,
  primary: string,
  secondary: string,
  danger: string,
  success: string,
  warning: string,
}

export interface ITheme {
  colors: IColors
}

export const white: ITheme = {
  colors: {
    bg: '#FEFEFE',
    bgAccent: '#FEFEFE',
    bgDark: '#F2F2F2',
    primary: '#000000',
    secondary: '#B1B1B1',
    danger: '#FF7575',
    success: '#8CCA9F',
    warning: '#8A8B94'
  }
}

export const dark: ITheme = {
  colors: {
    bg: '#1e1e1e',
    bgAccent: '#2e2e2e',
    bgDark: '#121212',
    primary: '#dddddd',
    secondary: '#B1B1B1',
    danger: '#FF7575',
    success: '#8CCA9F',
    warning: '#8A8B94'
  }
}
