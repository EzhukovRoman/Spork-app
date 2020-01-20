// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import BoxComponent from '../layout/BoxComponent'
import SearchBarContainer from '../../containers/SearchBarContainer'
import ListComponent from '../list/ListComponent'
import DepItemComponent from '../list/DepItemComponent'
import { useStoreActions, useStoreState } from 'easy-peasy'
import ArrowComponent from '../layout/ArrowComponent'
import { PAGE_USER_LIST } from '../../constants/pageNameConstants'

const DependencyListComponent: FC = () => {
  const dependencies = useStoreState(state => state.repo.dependencies)
  const onChangeItem = (text) => {
    console.log(text)
  }
  return (
    <ListComponent>
      {dependencies.map((item, i) => <DepItemComponent key={i} onClick={() => onChangeItem(item)} text={item}/>)}
    </ListComponent>
  )
}

const DependencyPageComponent: FC = () => {
  const usedDeps = useStoreState(state => state.repo.dependenciesSelected)
  const changePage = useStoreActions(actions => actions.page.setPage)
  const moveToNextStep = () => {
    changePage(PAGE_USER_LIST)
  }
  return (
    <>
      <SearchBarContainer />
      <BoxComponent indent={5}>
        <DependencyListComponent />
        {usedDeps.length > 0 ? <ArrowComponent onClick={moveToNextStep}/> : null}
      </BoxComponent>
    </>
  )
}

export default DependencyPageComponent
