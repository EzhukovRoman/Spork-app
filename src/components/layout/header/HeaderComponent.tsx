// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled from 'styled-components'

const HeaderArea = styled.header`
  & {
    width: 100%;
    padding: 1em;
    background: ${p => p.theme.colors.bgAccent};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  }
`

const Header: FC = () => (
  <HeaderArea>
    A0
  </HeaderArea>
)

export default Header
