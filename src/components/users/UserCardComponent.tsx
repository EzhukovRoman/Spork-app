// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled from 'styled-components'
import ListItemComponent from '../list/ListItemComponent'

interface IUserCardProps {
  name: string
  avatar: string
}

const UserCardArea = styled.div`
  & {
    display: flex;
    padding: 1em;
    border-radius: 11px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    align-items: center;
  }
  & img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`

const UserCardComponent: FC<IUserCardProps> = ({ name, avatar }) => (
  <ListItemComponent>
    <UserCardArea>
      <img src={avatar} alt={name} />
      <a href={`https://github.com/${name}`} target={'_blank'}>{name}</a>
    </UserCardArea>
  </ListItemComponent>
)

export default UserCardComponent
