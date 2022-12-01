import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PageContainer } from '../../components/common/PageContainer'
import { RightSide, LeftSide, UserInfo, AdContainer, Fake, AdInfo } from './AdPageElements'
import Header from '../../components/Header/Header'
import OlxApi from '../../helpers/olxApi'

const AdPage = () => {

    interface adType {
        id?:number,
        title?:string,
        price?:number,
        priceNegotiable?: number,
        description?: string,
        dateCreated?: string,
        views?: number,
        images?: string[],
        category?: string,
        userInfo?: {name: string, email:string},
        state?: string
    }

    const api = OlxApi
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [adInfo, setAdInfo] = useState<adType>({})
    const [adSmallImages, setAdSmallImages] = useState<any[]>([])
    const [adDate, setAdDate] = useState<any[]>([])

    useEffect(()=> {
        if (id) {
            const getAdInfo = async (id:string)=> {
                const json = await api.getAd(id)
                setAdInfo(json)
                const smallImages = json.images.slice(1)
                setAdSmallImages(smallImages)
                const date = json.dateCreated.split('-')
                setAdDate(date)
                setLoading(false)
            }
            getAdInfo(id)
        }
    }, [])


  return (
    <>
        <Header />
        <PageContainer>
            <AdContainer>
                <LeftSide>
                    <div className='bigPic'>
                          {loading && <Fake height={'450px'} />}
                    </div>
                    <div className='smallPics'>

                    </div>
                </LeftSide>
                <RightSide>
                      {loading && <Fake height={'100px'} />}
                        <h1>{adInfo.title}</h1>
                        <p>{`R$ ${adInfo.price},00`}</p>
                    <UserInfo>
                        {loading && <Fake height={'140px'} />}
                        <p>{adInfo.userInfo?.name}</p>
                        <p>{adInfo.userInfo?.email}</p>
                    </UserInfo>
                </RightSide>
            </AdContainer>
              <AdInfo>
                  <p>{adInfo.description}</p>
                  <p>{`${adDate[2]}-${adDate[1]}-${adDate[0]}`}</p>
              </AdInfo>
        </PageContainer>
    </>
  )
}

export default AdPage