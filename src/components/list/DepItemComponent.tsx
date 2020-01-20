// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import ListItemComponent from './ListItemComponent'
import CheckboxComponent from './CheckboxComponent'

interface IDepItemProps {
  text: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DepItemComponent: FC<IDepItemProps> = ({ text }) => {
  return (
    <ListItemComponent>
      <CheckboxComponent text={text} />
    </ListItemComponent>
  )
}

export default DepItemComponent
