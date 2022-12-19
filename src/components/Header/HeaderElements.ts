import styled from 'styled-components'
import { Button } from '../common/Button'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.267);
    background-color: rgb(249, 249, 249);
    height: 80px;
`

export const NavBar = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
  margin: 0 24px;
  align-items: center;
  color: #4A4A4A;

  .dropButton {
    cursor: pointer;
    user-select: none;
  }

  .dropDown {
    position: absolute;
    top: 56px;
    transform: translateX(-10%);
    background-color: #F9F9F9;
    overflow: hidden;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border:1px solid rgba(0, 0, 0, 0.267);
    cursor: default;

    li {
      cursor: pointer;

      &:hover {
        color: purple;
      }
    }
  }

  .closedMenu {
    display: none;
  }
`

export const NavItem = styled.li`
  cursor: pointer;
  color: #4A4A4A;

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
  width: 126px;
  transform: translateY(10%);
`