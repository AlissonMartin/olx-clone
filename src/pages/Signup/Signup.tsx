import React, { useState, useEffect } from 'react'
import { SignUpPage, FormsArea, SignUpTitle, LabelTitle, InputArea, Input, SubmitButton, SelectInput, SelectInputArea } from './signupElements'
import ErrorMessage from '../../components/common/ErrorMessage'
import {Link} from 'react-router-dom'
import useApi from '../../helpers/olxApi'
import { doLogin } from '../../helpers/AuthHandler'

const SignUp = () => {
    const api = useApi

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [stateLoc, setStateLoc] = useState('')
    const [stateList, setStateList] = useState<any[]>([])
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        setError('')
        setDisabled(true)

        if (password !== passwordConfirm) {
            setError('Senhas não batem')
            setDisabled(false)
            return
        }
        const json = await api.signup(name, email, password, stateLoc)
        if (json.error) {
            setError(json.error)
        } else {
            doLogin(json.token)
            window.location.href = '/'
        }
    }

    useEffect(()=> {
        const getStates = async ()=> {
            const json = await api.getStates()
            setStateList(json.states)
        }
        getStates()
    }, [])
  return (
    <SignUpPage>
        {error &&
        <ErrorMessage>{error}</ErrorMessage>
        }
        <FormsArea>
            <form onSubmit={handleSubmit} method='POST'>
                <SignUpTitle>Cadastro</SignUpTitle>
                  <LabelTitle>Apelido</LabelTitle>
                  <InputArea>
                      <Input type='text' disabled={disabled} value={name} onChange={e => setName(e.target.value)} required></Input>
                  </InputArea>
                <LabelTitle>E-mail</LabelTitle>
                <InputArea>
                    <Input type='email' disabled={disabled} value={email} onChange={e => setEmail(e.target.value)} required></Input>
                </InputArea>
                <LabelTitle>Senha</LabelTitle>
                <InputArea>
                    <Input type='password' disabled={disabled} value={password} onChange={e => setPassword(e.target.value)} required></Input>
                </InputArea>
                  <LabelTitle>Confirmar senha</LabelTitle>
                  <InputArea>
                      <Input type='password' disabled={disabled} value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required></Input>
                  </InputArea>
                  <SelectInputArea>
                    <SelectInput value={stateLoc} onChange={e=> setStateLoc(e.target.value)} required>
                        <option value="" disabled>Selecione seu estado</option>
                          {stateList.map((i, k) =>
                              <option key={k} value={i.name}>{i.name}</option>
                          )}
                    </SelectInput>
                  </SelectInputArea>
                <SubmitButton type='submit' value='Fazer Cadastro'></SubmitButton>
                <p>Já tem conta? <Link to={'/signin'} style={{ textDecoration: 'none' }}>Entrar</Link></p>
            </form>
        </FormsArea>
    </SignUpPage>
  )
}

export default SignUp