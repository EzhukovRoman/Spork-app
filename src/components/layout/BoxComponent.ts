// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled, { StyledFunction } from 'styled-components'

interface IBoxProps {
  indent: number
}

const div: StyledFunction<IBoxProps & React.HTMLProps<HTMLDivElement>> = styled.div

export default div`
  & {
    width: 100%;
    background: ${p => p.theme.colors.bgAccent};
    border: 1px solid #E4E4E4;
    border-radius: 11px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    margin-top: ${p => p.indent ? `${p.indent}rem` : `0`};
    position: relative;
  }
`
