// eslint-disable-next-line no-unused-vars
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useStoreActions } from "easy-peasy";

interface ICheckboxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckboxArea = styled.div`
  & input {
    display: none;
  }
  & label {
    display: flex;
    align-items: center;
    cursor: pointer;
  } 
`

const Checkmark = styled.div`
  & {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${p => p.theme.colors.success};
    position: relative;
    margin-right: 8px;
  }
  &:before{
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p => p.active ? p.theme.colors.bg : 'transparent'};
    position: absolute;
    top: 4px;
    right: 4px;
    transition: background 0.1s ease-in-out;
  }
`

const CheckboxComponent: FC<ICheckboxProps> = ({ onChange, text }) => {
  const [isChecked, setChecked] = useState(false)
  const addDep = useStoreActions(state => state.repo.addDependency)
  const removeDep = useStoreActions(state => state.repo.removeDependency)
  const handleClick = () => {
    setChecked(!isChecked)
    if (!isChecked) {
      addDep(text)
    } else {
      removeDep(text)
    }
  }
  return (
    <CheckboxArea>
      <label>
        <Checkmark active={isChecked}/>
        <input type='checkbox' onChange={handleClick} checked={isChecked} />
        {text}
      </label>
    </CheckboxArea>
  )
}

export default CheckboxComponent
