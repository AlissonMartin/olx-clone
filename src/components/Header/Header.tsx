import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isLogged, doLogout } from '../../helpers/AuthHandler'
import { HeaderContainer, NavBar, NavButton, NavItem, NavLogo } from './HeaderElements'

const Header = () => {

  const navigate = useNavigate()

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
          <NavItem>Minha Conta</NavItem>
          <NavItem onClick={handleLogout}>Sair</NavItem>
        </>
        }
        {!logged &&
        <>
          <NavItem>Login</NavItem>
          <NavItem>Cadastrar</NavItem>
        </>
        }

      <NavButton onClick={()=> { navigate('/newad') }}>Anunciar +</NavButton>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header