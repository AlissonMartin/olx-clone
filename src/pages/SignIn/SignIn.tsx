import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { FormsArea, InputArea, Input, LabelTitle, SignInTitle, SubmitButton, SignInPage, ErrorMessage, InputCheck} from './SignInElements'
import useApi from '../../helpers/olxApi'
import { doLogin } from '../../helpers/AuthHandler'

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
    <SignInPage>
      {error &&
        <ErrorMessage>{error}</ErrorMessage>
      }
      <FormsArea>
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