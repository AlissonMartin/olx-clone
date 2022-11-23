import React, { useEffect, useState } from 'react'
import { PageContainer } from '../../components/common/PageContainer'
import Header from '../../components/Header/Header'
import { HomeContainer, InputSearch, SearchArea, SubmitButton } from './HomeElements'
import OlxApi from '../../helpers/olxApi'



const Home = () => {
  let api = OlxApi

  const [q, setQ] = useState('')
  const [stateList, setStateList] = useState<any[]>([])
  const [recentAdsList, setRecentAdsList] = useState<any[]>([])
  const [stateLoc, setStateLoc] = useState('')

  useEffect(()=> {
    const getStates = async () => {
      const json = await api.getStates()
      setStateList(json.states)
    }
    getStates()
  }, [])

  useEffect(()=> {
    const getRecentAds = async ()=> {
      const json = await api.getAds({limit:9, sort:'desc'})
      setRecentAdsList(json.ads)
    }
    getRecentAds()
  }, [])

  return (
    <HomeContainer>
      <Header></Header>
      <PageContainer>
        <SearchArea>
          <form  method='GET' action='/ads'>
            <InputSearch type="text" name='q' placeholder='O que você procura?' value={q} onChange={e=> setQ(e.target.value)}/>
            <select name="state" onChange={e=> setStateLoc(e.target.value)}>
              {stateList.map((i, k)=> 
              <option key={k} value={i.name}>{i.name}</option>
              )}
            </select>
            <SubmitButton type='submit' value=''></SubmitButton>
          </form>
        </SearchArea>
      </PageContainer>
    </HomeContainer>

  )
}

export default Home