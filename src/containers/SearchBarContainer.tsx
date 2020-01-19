// eslint-disable-next-line no-unused-vars
import React, { FC, useState } from 'react'
import SearchBarComponent from '../components/searchBar/SearchBarComponent'
import { useStoreActions, useStoreState } from 'easy-peasy'

const ENTER_KEY = 'Enter'

const SearchBarContainer: FC = () => {
  const setText = useStoreActions(actions => actions.repo.setRepo)
  const text = useStoreState(state => state.repo.repository)
  const onChange = e => {
    setText(e.target.value)
  }
  const onKeyPress = e => {
    if (e.key === ENTER_KEY) {
      console.log(text)
    }
  }

  return (
    <SearchBarComponent text={text} onKeyPress={onKeyPress} onChange={onChange}/>
  )
}

export default SearchBarContainer
