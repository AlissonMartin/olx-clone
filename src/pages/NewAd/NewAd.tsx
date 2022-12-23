import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import { NewAdPage, FormsArea, PageTitle, LabelTitle, InputArea, Input, SubmitButton, SelectInput, SelectInputArea, TextArea } from './NewAdElements'
import ErrorMessage from '../../components/common/ErrorMessage'
import MaskedInput from 'react-text-mask'
import { createNumberMask } from 'text-mask-addons'
import useApi from '../../helpers/olxApi'
import { useNavigate } from 'react-router-dom'

const NewAd = () => {
  const api = useApi
  const fileFieldRef = useRef<any>(null)
  const navigate = useNavigate()


  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [priceNegotiable, setPriceNegotiable] = useState(false)
  const [category, setCategory] = useState('')
  const [categoryList, setCategoryList] = useState<any[]>([])
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const getCategories = async () => {
      const json = await api.getCategories()
      setCategoryList(json.categories)
    }
    getCategories()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setDisabled(true)

    let errors = []

    if (!title.trim()) {
      errors.push('Adicione um título')
    }

    if (!desc) {
      errors.push('Adicione uma categoria')
    }

    if (fileFieldRef.current?.files?.length === 0) {
      errors.push('Adicione ao menos uma foto')
    }

    if (errors.length === 0 ) {
      const fData = new FormData()
      fData.append('title', title)
      fData.append('price', price)
      fData.append('priceNeg', priceNegotiable === true ? 'true' : 'false')
      fData.append('desc', desc)
      fData.append('cat', category)

      if (fileFieldRef.current) {
        for (let i = 0; i < fileFieldRef?.current?.files?.length; i++) {
          fData.append('photos', fileFieldRef.current?.files[i])
        }
      }
      
      const json:any = await api.NewAd(fData)
      navigate(`/ad/${json.id}`)
    } else {
      setError(errors.join('\n'))
    }

    setDisabled(false)


  }

  const priceMask = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ','
  })

  return (
    <>
      <Header />
      <NewAdPage>
        {error &&
          <ErrorMessage>{error}</ErrorMessage>
        }
        <FormsArea>
          <form onSubmit={handleSubmit}>
            <PageTitle>Crie um novo anúncio</PageTitle>
            <LabelTitle htmlFor='inputTitle'>Título</LabelTitle>
            <InputArea>
              <Input type='text' disabled={disabled} value={title} onChange={e => setTitle(e.target.value)} required maxLength={25} id="inputTitle"></Input>
            </InputArea>
            <SelectInputArea>
              <SelectInput onChange={e => setCategory(e.target.value)} required >
                <option value="">Selecione a categoria</option>
                {categoryList.map((i, k) =>
                  <option key={k} value={i.name} data-testid={k}>{i.name}</option>
                )}
              </SelectInput>
            </SelectInputArea>
            <LabelTitle htmlFor='inputDesc'>Descrição</LabelTitle>
            <InputArea>
              <TextArea disabled={disabled} value={desc} onChange={e => setDesc(e.target.value)} required maxLength={350} id="inputDesc"></TextArea>
            </InputArea>
            <LabelTitle htmlFor='inputPrice'>Preço</LabelTitle>
            <InputArea>
              <MaskedInput mask={priceMask} placeholder="R$ " disabled={disabled} value={price} onChange={e => setPrice(e.target.value)} maxLength={12} />
            </InputArea>
            <LabelTitle>
              Negociar o preço?
              <InputArea>
                <Input type='checkbox' disabled={disabled} checked={priceNegotiable} onChange={e => setPriceNegotiable(!priceNegotiable)} style={{ marginLeft: '16px' }} id="inputPrice"></Input>
              </InputArea>
            </LabelTitle>
            <LabelTitle htmlFor='inputFile'>Fotos (ao menos 1)</LabelTitle>
            <InputArea>
              <Input type='file' ref={fileFieldRef} disabled={disabled} multiple required id="inputFile"></Input>
            </InputArea>
            <SubmitButton type='submit' value='Adicionar anúncio'></SubmitButton>
          </form>
        </FormsArea>
      </NewAdPage>
    </>
  )
}

export default NewAd