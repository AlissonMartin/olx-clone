import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContainer } from '../../components/common/PageContainer'
import Header from '../../components/Header/Header'
import { AdItem, CategoriesContainer, CategoryItem, HomeContainer, InputSearch, MainContainer, SearchArea, SubmitButton } from './HomeElements'
import OlxApi from '../../helpers/olxApi'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  let api = OlxApi
  const navigate = useNavigate()

  const [q, setQ] = useState('')
  const [stateList, setStateList] = useState<any[]>([])
  const [recentAdsList, setRecentAdsList] = useState<any[]>([])
  const [categoriesList, setCategoriesList] =  useState<any[]>([])
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
  useEffect(()=> {
    const getCategories = async ()=> {
      const json = await api.getCategories()
      setCategoriesList(json.categories)
    }
    getCategories()
  },[])

  return (
    <HomeContainer>
      <Header/>
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
        <CategoriesContainer>
          {categoriesList.map((i, k)=>
            <CategoryItem key={k} onClick={()=> { navigate(`/ads?cat=${i.slug}`) }}>
              <img src={i.img} alt=""/>
              <p>{i.name}</p>
            </CategoryItem>
          )}
        </CategoriesContainer>
        <MainContainer>
            {recentAdsList.map((i, k)=>
              <AdItem key={k}>
                <img src={`http://localhost:5000/${i.image}`} />
                <h3>{i.title}</h3> <span>R$ {i.price},00</span>
              </AdItem>
            )}
        </MainContainer>
      </PageContainer>
      <Footer/>
    </HomeContainer>

  )
}

export default Home