import React, {useState} from 'react'
import { Link} from "react-router-dom";
import { FormsArea, InputArea, Input, LabelTitle, SignInTitle, SubmitButton, SignInPage, InputCheck} from './SignInElements'
import ErrorMessage from '../../components/common/ErrorMessage';
import useApi from '../../helpers/olxApi'
import { doLogin } from '../../helpers/AuthHandler'
import logo from '../../assets/logo.png'

const SignIn = () => {
  const api = useApi

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [savePassword, setSavePassword] = useState(false)
  const [disabled , setDisabled] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisabled(true)
    setError('')
    const json = await api.login(email, password)
    if (json.error) {
      setError(json.error)
    } else {
      doLogin(json.token, savePassword)
      window.location.href = '/' 
    }
    setDisabled(false)
  }

  return (
    <SignInPage style={{minHeight: '0'}}>
      {error &&
        <ErrorMessage>{error}</ErrorMessage>
      }
      <FormsArea>
        <Link to={'/'}>
          <img src={logo} alt="logo" style={{ width: '80%', display: 'block', margin: 'auto' }}/>
        </Link>
        <form onSubmit={handleSubmit} method='POST'>
            <SignInTitle>Log In</SignInTitle>
            <LabelTitle>E-mail</LabelTitle>
            <InputArea>
              <Input type='email' disabled={disabled} value={email} onChange={e=>setEmail(e.target.value)} required></Input>
            </InputArea>
            <LabelTitle>Senha</LabelTitle>
            <InputArea>
              <Input type='password' disabled={disabled} value={password} onChange={e => setPassword(e.target.value)} required></Input>
            </InputArea>
            <LabelTitle>
              Lembrar Senha <InputCheck type='checkbox' disabled={disabled} checked={savePassword} onChange={() => setSavePassword(!savePassword)}></InputCheck>
            </LabelTitle>
            <SubmitButton type='submit' value='Fazer LogIn'></SubmitButton>
            <p>Não tem conta? <Link to={'/signup'} style={{textDecoration:'none'}}>Cadastre-se</Link></p>
        </form>
      </FormsArea>
    </SignInPage>
  )
}

export default SignIn