// eslint-disable-next-line no-unused-vars
import React, { FC, useState } from 'react'
import SearchBarComponent from '../components/searchBar/SearchBarComponent'
import { useStoreActions, useStoreState } from 'easy-peasy'
import {PAGE_SEARCH, PAGE_SELECT_DEPS} from "../constants/pageNameConstants";
const ENTER_KEY = 'Enter'

const SearchBarContainer: FC = () => {
  const setText = useStoreActions(actions => actions.repo.setRepo)
  const setPage = useStoreActions(actions => actions.page.setPage)
  const text = useStoreState(state => state.repo.repository)
  const page = useStoreState(state => state.page.currentPage)
  const onChange = e => {
    setText(e.target.value)
  }
  const onKeyPress = e => {
    if (e.key === ENTER_KEY && text.length > 0) {
      if (page === PAGE_SEARCH) {
        setPage(PAGE_SELECT_DEPS)
      }
    }
  }

  return (
    <SearchBarComponent text={text} onKeyPress={onKeyPress} onChange={onChange}/>
  )
}

export default SearchBarContainer
