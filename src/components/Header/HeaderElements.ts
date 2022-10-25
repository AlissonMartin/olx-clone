import styled from 'styled-components'
import { Button } from '../common/Button'

export const HeaderContainer = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.267);
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
`

export const NavButton = styled(Button)`
  background-color: orange;
  cursor: pointer;

  &:hover {
    background-color: 	rgba(255, 180, 0);
  }
`

export const NavLogo = styled.img`

`