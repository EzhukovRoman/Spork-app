// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled from 'styled-components'
import RightIcon from '../../assets/RightIcon'
import LeftIcon from '../../assets/LeftIcon'

const Arrow = styled.a`
  position: absolute;
  top: 10%;
  ${p => p.isLeft ? 'left: -15%' : 'right: -15%'};
  cursor: pointer;
`

interface IDepItemProps {
  isLeft?: boolean
  onClick?: (e: React.ChangeEvent<HTMLAnchorElement>) => void
}

const ArrowComponent: FC<IDepItemProps> = ({ isLeft, onClick }) => {
  return (
    <Arrow isLeft={isLeft} onClick={onClick}>
      {isLeft ? <LeftIcon/> : <RightIcon/>}
    </Arrow>
  )
}

export default ArrowComponent
