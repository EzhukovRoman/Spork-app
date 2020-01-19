// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled, { StyledFunction } from 'styled-components'

interface IListProps {
  indent?: number
}

const ul: StyledFunction<IListProps & React.HTMLProps<HTMLUListElement>> = styled.ul

export default ul`
  & {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & li:last-of-type {
    border: 0;
  }
`
