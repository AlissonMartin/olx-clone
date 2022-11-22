import React from 'react'
import { Link } from 'react-router-dom'
import { isLogged, doLogout } from '../../helpers/AuthHandler'
import { HeaderContainer, NavBar, NavButton, NavItem, NavLogo } from './HeaderElements'

const Header = () => {

  const handleLogout = ()=> {
    doLogout()
    window.location.href = '/'
  }
  let logged = isLogged()
  return (
    <HeaderContainer>
      <Link to='/'>
        <NavLogo src='/'/>
      </Link>
      <NavBar>
        {logged &&
        <>
          <NavItem>My account</NavItem>
          <NavItem>About</NavItem>
          <NavItem><button onClick={handleLogout}>Sair</button></NavItem>
        </>
        }
        {!logged &&
        <>
          <NavItem>Login</NavItem>
          <NavItem>Cadastrar</NavItem>
        </>
        }

        <NavItem><NavButton>Post an ad+</NavButton></NavItem>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header