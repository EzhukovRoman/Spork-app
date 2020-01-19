// eslint-disable-next-line no-unused-vars
import React, { FC, useState } from 'react'
import styled from 'styled-components'

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
  } 
  & input + div:before{
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p => p.theme.colors.bg};
    position: absolute;
    left: 4px;
    right: 4px;
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
`

const CheckboxComponent: FC<ICheckboxProps> = ({ onChange, text }) => {
  const [checked, setChecked] = useState(true)
  return (
    <CheckboxArea>
      <label>
        <Checkmark/>
        <input type='checkbox' onChange={(e) => setChecked(true)} checked={checked} />
        {text}
      </label>
    </CheckboxArea>
  )
}

export default CheckboxComponent
