import React, { useState, useEffect, useRef } from 'react'
import { PageContainer } from '../../components/common/PageContainer'
import ErrorMessage from '../../components/common/ErrorMessage'
import Header from '../../components/Header/Header'
import useApi from '../../helpers/olxApi'
import { Label, FormsArea, Input, InputArea, SubmitButton, Select, SelectInputArea, LeftSide, RightSide, UserPhoto, InputPhoto} from './MyAccountElements'
import Cookies from 'js-cookie'


const MyAccount = () => {
  const api = useApi

  const token = Cookies.get('token')

  const fileFieldRef = useRef<any>(null)

  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [stateList, setStateList] = useState<any[]>([])
  const [userInfo, setUserInfo] = useState<any>({})
  const [editMode, setEditMode] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [stateLoc, setStateLoc] = useState('')
  const [photoChange, setPhotoChange] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fData = new FormData()
    if (name !== '') {
      fData.append('name', name)
    }
    if (email !== '') {
      fData.append('email', email)
    }
    if (password !== '') {
      fData.append('password', password)
    }
    if (stateLoc !== '') {
      fData.append('state', stateLoc)
    }
    if (fileFieldRef.current) {
      if (fileFieldRef.current?.files !== null) {
        fData.append('photo', fileFieldRef.current?.files[0])
      }
    }

    await api.editInfo(fData)
    window.location.reload()
  }

  const handleEditMode = () => {
    setEditMode(!editMode)
    setDisabled(!disabled)
  }


  useEffect(() => {
    const getStates = async () => {
      const json = await api.getStates()
      setStateList(json.states)
    }
    getStates()
  }, [])

  useEffect(()=> {
    const getInfo = async () => {
      if (token) {
        const json = await api.getInfo({ token })
        setUserInfo(json)
      }
    }
    getInfo()
  }, [])

  return (
    <>
      <Header/>
      <PageContainer>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }
        <FormsArea>
          <LeftSide>
            <form onSubmit={handleSubmit}>
              <h1>Minha Conta</h1>
              <Label>Nome</Label>
              <InputArea>
                <Input type='text' disabled={disabled} placeholder={userInfo.name} onChange={e => setName(e.target.value)} value={name}></Input>
              </InputArea>
              <Label>Email</Label>
              <InputArea>
                <Input type='email' disabled={disabled} placeholder={userInfo.email} onChange={e=> setEmail(e.target.value)} value={email}></Input>
              </InputArea>
              <Label>Senha</Label>
              <InputArea>
                <Input type='text' disabled={disabled} placeholder='XXX' onChange={e=> setPassword(e.target.value)} value={password}></Input>
              </InputArea>
              {userInfo.state &&
                <Label>Localização: {userInfo.state} </Label>
              }
              {editMode && 
              <>
               <SelectInputArea>
                <Select onChange={e => setStateLoc(e.target.value)} value={stateLoc}>
                  <option value="">Alterar localização</option>
                  {stateList.map((i, k) =>
                    <option key={k} value={i.name}>{i.name}</option>
                  )}
                </Select>
              </SelectInputArea> 

               <SubmitButton type='submit' value='Alterar perfil'></SubmitButton> 
              </>
              }
            {userInfo.ads &&
                <p>Anúncios Ativos: {userInfo.ads.length}</p>
            }
            <div className='editButton' onClick={handleEditMode}>Editar perfil</div>
            </form>

          </LeftSide>
          <RightSide>
            <UserPhoto style={{backgroundImage: `url(http://localhost:5000/${userInfo.photo})`}}>
              {editMode && 
                <InputPhoto>
                  <label htmlFor='arquivo'></label>
                  <input type="file" id='arquivo' ref={fileFieldRef} onChange={()=> setPhotoChange(true)} />
                  <p>+</p>
                </InputPhoto>
              }
            </UserPhoto>
            {editMode && 
              <p>{photoChange === false ? 'Altere a foto de perfil' : 'foto alterada'}</p>
            }
          </RightSide>
        </FormsArea>
      </PageContainer>
    </>
  )
}

export default MyAccount