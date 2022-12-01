import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PageContainer } from '../../components/common/PageContainer'
import Header from '../../components/Header/Header'
import { AdItem, AdItemSmaller, CategoriesContainer, CategoryItem, HomeContainer, InputSearch, LeftSide, MainContainer, ModelBox, ModelBoxContainer, MostViewedContainer, MostViewedWrapper, RightSide, SearchArea, SubmitButton } from './HomeElements'
import OlxApi from '../../helpers/olxApi'
import Footer from '../../components/Footer/Footer'
import AboutUsImage from '../../assets/images/home.png'
import { Button } from '../../components/common/Button'



const Home = () => {
  let api = OlxApi
  const navigate = useNavigate()

  const [q, setQ] = useState('')
  const [stateList, setStateList] = useState<any[]>([])
  const [recentAdsList, setRecentAdsList] = useState<any[]>([])
  const [mostViewedAdsList, setMostViewedAdsList] = useState<any[]>([])
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

  useEffect(()=> {
    const getMostViewedAds = async ()=> {
      const json = await OlxApi.getAds({order: 'views', sort: 'desc', limit:4})
      setMostViewedAdsList(json.ads)
    }
    getMostViewedAds()
  }, [])

  return (
    <>
      <Header/>
      <PageContainer>
        <SearchArea>
          <form  method='GET' action='/ads'>
            <InputSearch type="text" name='q' placeholder='O que você procura?' value={q} onChange={e=> setQ(e.target.value)}/>
            <select name="state" onChange={e=> setStateLoc(e.target.value)}>
              <option value='' selected></option>
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
              <Link to={`/ad/${i.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <AdItem key={k}>
                  <img src={`http://localhost:5000/${i.image}`} />
                  <h3>{i.title}</h3> <span>R$ {i.price},00</span>
                </AdItem>
             </Link>
            )}
        </MainContainer>
        <MostViewedContainer>
          <h2>Anúncios mais visualizados</h2>
          <MostViewedWrapper>
            {mostViewedAdsList.map((i,k)=>
              <Link to={`/ad/${i.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <AdItemSmaller key={k}>
                  <img src={`http://localhost:5000/${i.image}`} alt="" />
                  <h3>{i.title}</h3>
                  <p>R$ {i.price},00</p>
                </AdItemSmaller>
              </Link>
            )}
          </MostViewedWrapper>
        </MostViewedContainer>
        <ModelBoxContainer>
          <ModelBox>
            <LeftSide>
              <h3>Saiba mais sobre nós</h3>
              <p>Conheça toda nossa história e descubra o porque somos a melhor escolha para impulsionar seu negócio</p>
              <Button>Acesse</Button>
            </LeftSide>
            <RightSide>
              <img src={AboutUsImage} alt="" />
            </RightSide>
          </ModelBox>
        </ModelBoxContainer>
      </PageContainer>
      <Footer/>
    </>
  )
}

export default Home