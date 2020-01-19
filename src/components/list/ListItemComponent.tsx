// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled, { StyledFunction } from 'styled-components'

interface IListItemProps {
  onClick?: (e: React.ChangeEvent<HTMLAnchorElement>) => void
}

const li: StyledFunction<IListItemProps & React.HTMLProps<HTMLLIElement>> = styled.li

export default li`
  & {
    border-bottom: 1px solid #D8D8D8;
    padding: 15px;
    font-side: 16px;
  }
`
