// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import SearchPageComponent from '../components/pages/SearchPageComponent'
import DependencyPageComponent from '../components/pages/DependencyPageComponent'
import UserSearchPageComponent from '../components/pages/UserSearchPageComponent'
import { PAGE_SEARCH, PAGE_SELECT_DEPS, PAGE_USER_LIST } from '../constants/pageNameConstants'
import { useStoreState } from 'easy-peasy'

const PageRouterContainer: FC = () => {
  const currentPage = useStoreState(state => state.page.currentPage)
  switch (currentPage) {
    case PAGE_SEARCH:
      return <SearchPageComponent/>
    case PAGE_SELECT_DEPS:
      return <DependencyPageComponent/>
    case PAGE_USER_LIST:
      return <UserSearchPageComponent/>
    default:
      return <SearchPageComponent/>
  }
}

export default PageRouterContainer
