import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isLogged, doLogout } from '../../helpers/AuthHandler'
import { HeaderContainer, NavBar, NavButton, NavItem, NavLogo } from './HeaderElements'
import  Logo  from '../../assets/logo.png'

const Header = () => {


  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  const handleLogout = ()=> {
    doLogout()
    window.location.href = '/'
  }
  let logged = isLogged()

  return (
    <HeaderContainer>
      <Link to='/'>
        <NavLogo src={Logo}/>
      </Link>
      <NavBar>
        {logged &&
        <>
          <div onClick={()=> setIsActive(!isActive)} className="dropButton">
            Minha Conta
            <div className={isActive ? 'openMenu dropDown' : 'closedMenu dropDown'}>
              <li onClick={()=> { navigate('/myaccount') }}>Meu perfil</li>
              <li onClick={()=> { navigate('/myads') }}>Meus anúncios</li>
            </div>
          </div>
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