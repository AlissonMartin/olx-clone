import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PageContainer } from '../../components/common/PageContainer'
import { RightSide, LeftSide, UserInfo, AdContainer, Fake, AdInfo, Price, DescriptionBox, Description, AdsContainer, AdButton } from './AdPageElements'
import { AdItem } from '../../components/common/AdItem'
import Header from '../../components/Header/Header'
import OlxApi from '../../helpers/olxApi'
import { adType } from '../../Types/Types'
import Footer from '../../components/Footer/Footer'

const AdPage = () => {

    const api = OlxApi
    const { id } = useParams()
    const imageRef = useRef<HTMLDivElement>(null)

    const [loading, setLoading] = useState(true)
    const [adInfo, setAdInfo] = useState<adType>({
        id: 0,
        title: '',
        price: 0,
        priceNegotiable: 0,
        description: '',
        dateCreated: '',
        views: 0,
        images: [],
        category: '',
        userInfo: { name: '', email: '' },
        state: ''
    })
    const [adDate, setAdDate] = useState<any[]>([])
    const [imgIndex, setImgIndex] = useState<number>(0)
    const [sameCategoryAds, setSameCategoryAds] = useState<any>([])


    useEffect(() => {
        if (id) {
            const getAdInfo = async (id: string) => {
                const json = await api.getAd(id)
                setAdInfo(json)
                const date = json.dateCreated.split('-')
                setAdDate(date)
                const ads = await api.getAds({cat: json.category, limit: 4})
                setSameCategoryAds(ads.ads)
                setLoading(false)
            }

            getAdInfo(id)

        }
    }, [])


    const handleTab = (index: number) => {
        setImgIndex(index)
        if (imageRef.current) {
            let images = imageRef.current.children
            for (let i = 0; i < images.length; i++) {
                images[i].className = images[i].className.replace('active', '')
            }
            images[index].className = 'active'
        }
    }

    return (
        <>
            <Header />
            <PageContainer style={{ padding: '10px' }}>
                <h1 data-testId='h1'>{adInfo.title}</h1>
                <AdContainer>
                    <LeftSide>
                        <div className='bigPic'>
                            {loading && <Fake height={'450px'} />}
                            <img src={`http://localhost:5000/${adInfo.images[imgIndex]}`} alt="" data-testId='bigPic'/>
                        </div>
                        <div className='smallPics' ref={imageRef}>
                            {adInfo.images?.map((i, k) =>
                                <img key={k} src={`http://localhost:5000/${i}`} alt="" className={k === 0 ? 'active' : ''} onClick={() => { handleTab(k) }} />
                            )}
                        </div>
                    </LeftSide>
                    <RightSide>
                        {loading && <Fake height={'100px'} />}
                        <Price>{`R$ ${adInfo.price},00`}</Price>
                        <p>Visualizações: {adInfo.views}</p>
                        <UserInfo>
                            {loading && <Fake height={'140px'} />}
                            <p style={{ fontWeight: 'bold' }}>{adInfo.userInfo?.name}</p>
                            <p>{adInfo.userInfo?.email}</p>
                        </UserInfo>
                        <AdButton>Comprar</AdButton>
                        <AdButton>Fale com o vendedor</AdButton>
                    </RightSide>
                </AdContainer>
                {adInfo &&
                    <AdInfo>
                        <DescriptionBox>{(adInfo.priceNegotiable === 1 ? 'Aceita oferta' : 'Não aceita oferta')}</DescriptionBox>
                        <DescriptionBox>{adInfo.state}</DescriptionBox>
                        <Description>
                            <p>{adInfo.description}</p>
                            <p>{`${adDate[2]}-${adDate[1]}-${adDate[0]}`}</p>
                        </Description>
                    </AdInfo>
                }
                <h3 style={{fontSize: '1.6rem', margin: '32px' }}>Anúncios da mesma categoria</h3>
                <AdsContainer>
                    {sameCategoryAds.map((i:any, k: number)=>
                        <Link key={k} to={`/ad/${i.id}`} onClick={window.location.reload} style={{ textDecoration: 'none', color: 'black' }}>
                            <AdItem >
                                <img src={`http://localhost:5000/${i.image}`} alt="" />
                                <h3>{i.title}</h3>
                                <p>R$ {i.price},00</p>
                            </AdItem>
                        </Link>
                    ) }
                </AdsContainer>
            </PageContainer>
            <Footer/>
        </>
    )
}

export default AdPage