// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled, { StyledFunction } from 'styled-components'

interface ILinkProps {
    secondary: boolean
    onClick?: (e: React.ChangeEvent<HTMLAnchorElement>) => void
}

const link: StyledFunction<ILinkProps & React.HTMLProps<HTMLAnchorElement>> = styled.a

export default link`
  & {
    color: ${p => p.secondary ? p.theme.colors.secondary : p.theme.colors.primary};
    font-size: 14px;
    margin: 0 auto;
    margin-top: 10rem;
    cursor: pointer;
  }
`
