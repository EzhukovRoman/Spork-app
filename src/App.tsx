// eslint-disable-next-line no-unused-vars
import React, { useState, FC } from 'react'
import ThemeContainer from './containers/ThemeContainer'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/layout/header/HeaderComponent'
import LayoutContentComponent from './components/layout/LayoutContentComponent'
import PageRouterContainer from './containers/PageRouterContainer'
import { store } from './store'
import { StoreProvider } from 'easy-peasy'

const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <ThemeContainer>
        <Header/>
        <LayoutContentComponent>
          <PageRouterContainer />
        </LayoutContentComponent>
        <GlobalStyles/>
      </ThemeContainer>
    </StoreProvider>
  )
}

export default App
