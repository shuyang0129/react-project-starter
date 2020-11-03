import * as S from './style'

import { Container, MainContent } from '@utils/style'

import { LOGO } from '@constants/topBarButtonTypes'
import Nav from '@components/Nav'
import React from 'react'
import TopBar from '@components/TopBar'

const Home = props => {
  return (
    <Container>
      <TopBar left={LOGO} />
      <MainContent>
        <Nav />
        <S.Container>
          <p>Home</p>
          <p>{process.env.REACT_APP_KEYWORD}</p>
          <p>{process.env.REACT_APP_SECRET}</p>
        </S.Container>
      </MainContent>
    </Container>
  )
}

export default Home
