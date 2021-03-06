// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react'
import styled from 'styled-components'
import { API_SIGNIN_URL } from '../../../constants/apiConstants'
const HeaderArea = styled.header`
  & {
    padding: 1em;
    background: ${p => p.theme.colors.bgAccent};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
  }
`

const Header: FC = () => (
  <HeaderArea>
    Spork
    <a href={API_SIGNIN_URL}>Log in</a>
  </HeaderArea>
)

export default Header
