// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled from 'styled-components'

const ContentArea = styled.main`
  & {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Container = styled.section`
  & {
    width: 800px;
    display: flex;
    flex-direction: column;
  }
`

const LayoutContentComponent: FC = ({ children }) => (
  <ContentArea>
    <Container>
      {children}
    </Container>
  </ContentArea>
)

export default LayoutContentComponent
