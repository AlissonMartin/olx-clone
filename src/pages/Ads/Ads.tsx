import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PageContainer } from '../../components/common/PageContainer'
import { SearchArea, InputSearch, SubmitButton, SearchBar, AdsContainer, AdWrapper, LeftSide, RightSide, Pagination } from './AdsElements'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import OlxApi from '../../helpers/olxApi'

const Ads = () => {
  let api = OlxApi
  let navigate = useNavigate()

  const useQueryString = ()=> {
    return new URLSearchParams( useLocation().search)
  }

  const query = useQueryString()

  const [q, setQ] = useState<any>(query.get('q') ? query.get('q') : '')
  const [stateLoc, setStateLoc] = useState<any>(query.get('state') ? query.get('state') : '')
  const [cat, setCat] = useState<any>(query.get('cat') ? query.get('cat') : '')
  const [stateList, setStateList] = useState<any[]>([])
  const [categoriesList, setCategoriesList] = useState<any[]>([])
  const [ads, setAds] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalAds, setTotalAds] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [currentPage, setCurrentPage] =useState(1)


  const getAds = async () => {
    setLoading(true)
    const offset = (currentPage - 1) * 8
    const json = await OlxApi.getAds({ sort: 'desc', limit: 8, q: q, cat: cat, state: stateLoc, offset })
    setAds(json.ads)
    setTotalAds(json.total)
    setLoading(false)
  }

  // BR states
  useEffect(() => {
    const getStates = async () => {
      const json = await api.getStates()
      setStateList(json.states)
    }
    getStates()
  }, [])

  // Categories
  useEffect(() => {
    const getCategories = async () => {
      const json = await api.getCategories()
      setCategoriesList(json.categories)
    }
    getCategories()
  }, [])

  // Search
  useEffect(()=> {
    let queryString = []

    if (cat) {
      queryString.push(`cat=${cat}`)
    }

    if (stateLoc) {
      queryString.push(`state=${stateLoc}`)
    }
    navigate(`?${queryString.join('&')}`, {replace: true})

    setCurrentPage(1)
    getAds()
  },[stateLoc, cat])

  useEffect(() => {
    getAds()
  }, [])

  // Pagination
  useEffect(()=> {
    if (ads.length > 0) {
      setPageCount(Math.ceil(totalAds / ads.length))
    } else {
      setPageCount(1)
    }

  }, [totalAds])

  let pagination = []
  for (let i = 1; i <= pageCount; i++) {
    pagination.push(i)
  }

  useEffect(()=> {
    getAds()
  },[currentPage])

  return (
    <>
      <Header />
      <PageContainer>
        <SearchArea>
          <form method='GET' action='/ads'>
            <SearchBar>
              <InputSearch type="text" name='q' placeholder='O que você procura?' value={q} onChange={e => setQ(e.target.value)} />
              <select name='cat' onChange={e=> setCat(e.target.value)} value={cat}>
                <option value="">Categoria</option>
                {categoriesList.map((i, k) =>
                  <option key={k} value={i.slug}>{i.name}</option>
                )}
              </select>
              <select name="state" onChange={e => setStateLoc(e.target.value)} value={stateLoc}>
                <option value='' >Estado</option>
                {stateList.map((i, k) =>
                  <option key={k} value={i.name}>{i.name}</option>
                )}
              </select>
              <SubmitButton type='submit' value=''></SubmitButton>
            </SearchBar>
          </form>
        </SearchArea>
        <AdsContainer>
          <h3 className='title'>Resultados:</h3>
          {loading &&
            <div className='warning'>Carregando</div>
          }
          {!loading && ads.length === 0 && 
            <div className='warning'>Nenhum resultado encontrado</div>
          }
          {ads.map((i,k)=> 
            <AdWrapper key={k}>
              <LeftSide src={`http://localhost:5000/${i.image}`}></LeftSide>
              <RightSide>
                <h3>{i.title}</h3>
                <h4>R$ {i.price},00</h4>
              </RightSide>
            </AdWrapper>
          )}
        </AdsContainer>
        {pageCount > 1 &&
          <Pagination>
            {pagination.map ((i,k)=>
              <div onClick={()=> setCurrentPage(i)} className={i === currentPage ? 'pageItem active' : 'pageItem'} key={k}>{i}</div>
            )}
          </Pagination>
        }
      </PageContainer>
      <Footer />
    </>
  )
}

export default Ads