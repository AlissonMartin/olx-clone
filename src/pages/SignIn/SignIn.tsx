import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { PageContainer } from '../../components/common/PageContainer'
import { FormsArea, InputArea, LabelInput, LabelTitle, SignInTitle, SubmitButton } from './SignInElements'
import useApi from '../../helpers/olxApi'
import { doLogin } from '../../helpers/AuthHandler'

const SignIn = () => {
  const api = useApi
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [savePassword, setSavePassword] = useState(false)
  const [disabled , setDisabled] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisabled(true)
    const json = await api.login(email, password)

    if (json.error) {
      setError(json.error)
    } else {
      doLogin(json.token, savePassword)
      window.location.href = '/' 
    }
  }

  return (
    <PageContainer>
      <SignInTitle>Log In</SignInTitle>
      <FormsArea>
        <form onSubmit={handleSubmit}>
          <label>
            <LabelTitle>E-mail</LabelTitle>
            <InputArea>
              <LabelInput type='email' disabled={disabled} value={email} onChange={e=>setEmail(e.target.value)} required></LabelInput>
            </InputArea>
            <LabelTitle>Senha</LabelTitle>
            <InputArea>
              <LabelInput type='password' disabled={disabled} value={password} onChange={e => setPassword(e.target.value)} required></LabelInput>
            </InputArea>
            <LabelTitle>Lembrar Senha</LabelTitle>
            <InputArea>
              <LabelInput type='checkbox' disabled={disabled} checked={savePassword} onChange={()=> setSavePassword(!savePassword)}></LabelInput>
            </InputArea>
            <SubmitButton>Log In</SubmitButton>
          </label>
        </form>
      </FormsArea>
    </PageContainer>
  )
}

export default SignIn