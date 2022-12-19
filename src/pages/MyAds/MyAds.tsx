import { useState, useEffect } from 'react'
import { PageContainer } from '../../components/common/PageContainer'
import { MenuContainer, MenuBar, MenuItem, MainContainer } from './MyAdsElements'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { AdItem } from '../../components/common/AdItem'
import OlxApi from '../../helpers/olxApi'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const MyAds = () => {
  const api = OlxApi

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

  console.log(ads)
  return (
    <>
        <Header/>
        <PageContainer>
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
                  <Link to={`/ad/${i.id}`} style={{ textDecoration: 'none', color: 'black' }} key={k}>
                    <AdItem >
                      <img src={`http://localhost:5000/${i.image}`} />
                      <h3>{i.title}</h3> <span>R$ {i.price},00</span>
                    </AdItem>
                  </Link>
                )}
              </MainContainer>
            }
        </PageContainer>
        <Footer/>
    </>
  )
}

export default MyAds