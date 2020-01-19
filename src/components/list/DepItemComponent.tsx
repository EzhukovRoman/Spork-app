// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled from 'styled-components'
import ListItemComponent from './ListItemComponent'
import LinkComponent from '../typography/LinkComponent'
import CheckboxComponent from './CheckboxComponent'

interface IDepItemProps {
  text: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DepItemComponent: FC<IDepItemProps> = ({ onChange, text }) => {
  return (
    <ListItemComponent>
      <CheckboxComponent text={text}/>
    </ListItemComponent>
  )
}

export default DepItemComponent
