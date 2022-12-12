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
          <Link to={'/signin'} style={{ textDecoration: 'none', color: 'black' }}><NavItem>Entrar</NavItem></Link>
          <Link to={'/signup'} style={{ textDecoration: 'none', color: 'black' }}><NavItem>Cadastrar</NavItem></Link>
        </>
        }

      <NavButton onClick={()=> { navigate('/newad') }}>Anunciar +</NavButton>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header