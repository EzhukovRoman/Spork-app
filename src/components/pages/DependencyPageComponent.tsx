// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import BoxComponent from '../layout/BoxComponent'
import SearchBarContainer from '../../containers/SearchBarContainer'
import ListComponent from '../list/ListComponent'
import DepItemComponent from '../list/DepItemComponent'

const DependencyPageComponent: FC = ({ list }) => {
  return (
    <>
      <SearchBarContainer />
      <BoxComponent indent={5}>
        <ListComponent>
          <DepItemComponent text={'Foo'}/>
          <DepItemComponent text={'Foo'}/>
          <DepItemComponent text={'Foo'}/>
          <DepItemComponent text={'Foo'}/>
          <DepItemComponent text={'Foo'}/>
        </ListComponent>
      </BoxComponent>
    </>
  )
}

export default DependencyPageComponent
