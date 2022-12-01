import styled from 'styled-components'
import { Button } from '../common/Button'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.267);
    background-color: purple;
`

export const NavBar = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
  margin: 0 24px;
  align-items: center;
`

export const NavItem = styled.li`
  cursor: pointer;
  color: white;

  button {
    border: 0;
    background:none;
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    color: white;

    &:hover {
      color: purple;
    }
  }

  &:hover {
    color: purple;
  }
`

export const NavButton = styled(Button)`
  cursor: pointer;
  background-color: #35800D;

  &:hover {
    background-color: #30730B;
  }
`

export const NavLogo = styled.img`

`