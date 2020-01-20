// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import BoxComponent from '../layout/BoxComponent'
import ArrowComponent from '../layout/ArrowComponent'
import { useStoreActions, useStoreState} from 'easy-peasy'
import { PAGE_SELECT_DEPS } from '../../constants/pageNameConstants'
import ListComponent from '../list/ListComponent'
import UserCardComponent from "../users/UserCardComponent";

const UserSearchPageComponent: FC = () => {
  const changePage = useStoreActions(actions => actions.page.setPage)
  const users = useStoreState(state => state.repo.users)
  const goBack = () => {
    changePage(PAGE_SELECT_DEPS)
  }
  console.log(users)
  return (
    <BoxComponent indent={5}>
      <ListComponent>
        {users.map((user, i) => <UserCardComponent key={i} name={user.User.login} avatar={user.User.avatar_url}/>)}
      </ListComponent>
      <ArrowComponent isLeft onClick={goBack}/>
    </BoxComponent>
  )
}

export default UserSearchPageComponent
