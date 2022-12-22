import { useState, useEffect } from 'react'
import { PageContainer } from '../../components/common/PageContainer'
import { MenuContainer, MenuBar, MenuItem, MainContainer, EmptyContainer, DeleteButton } from './MyAdsElements'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { AdItem } from '../../components/common/AdItem'
import OlxApi from '../../helpers/olxApi'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const MyAds = () => {
  const api = OlxApi
  const navigate = useNavigate()

  const [ads, setAds] = useState<any[]>([])
  const [currentOption, setCurrentOption] = useState(true)

  const token = Cookies.get('token')

  const getInfo = async(status: 1 | 0)=> {
    if (token) {
      const json = await api.getInfo({token, status})
      setAds(json.ads)
    }
  }

  useEffect(()=> {
    getInfo(1)
  },[])

  const handleDelete = async(id:number)=> {
    if (token) {
      const json = await api.deleteAd({ token, id })
      navigate(0)
    }
  }
  return (
    <>
        <Header/>
        <PageContainer style={{ minHeight: '80vh' }}>
            <MenuContainer>
              <MenuBar>
                <MenuItem className={currentOption === true ? 'active' : ''} onClick={() => { setCurrentOption(true); getInfo(1) }}>Anúncios Ativos</MenuItem>
                <MenuItem className={currentOption === false ? 'active' : ''} onClick={() => { setCurrentOption(false); getInfo(0) }}>Anúncios Inativos</MenuItem>
              </MenuBar>
            </MenuContainer>
        <h2 style={{ marginTop: '44px', marginLeft: '64px', color: '#4A4A4A'}}>Seus Anúncios:</h2>
            {ads.length > 0 &&
              <MainContainer>
                {ads.map((i, k)=>
                    <AdItem style={{position: 'relative'}} key={k}>
                      <DeleteButton onClick={()=> {handleDelete(i.id)}}>
                        <div className='topBar'></div>
                        <div className='bottomBar'></div>
                      </DeleteButton>
                      <img src={`http://localhost:5000/${i.image}`} onClick={()=> {navigate(`/ad/${i.id}`)}} alt="imagem do anúncio"/>
                      <h3>{i.title}</h3> <span>R$ {i.price},00</span>
                    </AdItem>
                )}
              </MainContainer>
            }
            {ads.length === 0 &&
              <EmptyContainer>
                <h3>Nenhum anúncio encontrado</h3>
              </EmptyContainer>
            }
        </PageContainer>
        <Footer/>
    </>
  )
}

export default MyAds