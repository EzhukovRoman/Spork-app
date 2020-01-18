// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import Theme from './components/ThemeComponent'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/layout/header/HeaderComponent'
import { white } from './styles/themes'
import LayoutContentComponent from './components/layout/LayoutContentComponent'
import SearchPageComponent from './components/pages/SearchPageComponent'
import { StateProvider } from './Context'
import appReducer, { initialState } from './reducers/appReducer'

const App: FC = () => {
  return (
    <StateProvider initialState={initialState} reducer={appReducer}>
      <Theme theme={white}>
        <Header/>
        <LayoutContentComponent>
          <SearchPageComponent />
        </LayoutContentComponent>
        <GlobalStyles/>
      </Theme>
    </StateProvider>
  )
}

export default App
