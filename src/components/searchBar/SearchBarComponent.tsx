// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled from 'styled-components'
import GitHubIcon from '../../assets/GitHubIcon'

interface ISearchBarProps {
    text: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBarArea = styled.div`
  & {
    display: flex;
    padding: 1em;
    background: ${p => p.theme.colors.bgAccent};
    border: 1px solid #E4E4E4;
    border-radius: 11px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    align-items: center;
  }
  & svg path {
    fill: ${p => p.theme.colors.primary};
  }
`

const Input = styled.input`
  & {
    padding: 0;
    width: 100%;
    font-size: 26px;
    margin-left: 1rem;
    border: none;
  }
  &::placeholder {
    color: ${p => p.theme.colors.secondary};
  }
  &:focus {
    outline: none;
  }
`

const SearchBarComponent: FC<ISearchBarProps> = ({ onKeyPress, onChange, text }) => (
  <SearchBarArea>
    <GitHubIcon />
    <Input placeholder='github/linguist' value={text} onKeyPress={onKeyPress} onChange={onChange}/>
  </SearchBarArea>
)

export default SearchBarComponent
