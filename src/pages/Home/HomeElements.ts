import styled from "styled-components";
import { Button } from '../../components/common/Button'
import svgPesquisar from '../../assets/icons8-pesquisar.svg'

export const HomeContainer = styled.div`
`

export const SearchArea = styled.div`

    form {
        display: flex;
        height: 64px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: 2px solid grey;
        margin: 0 32px;

        select {
            height: 100%;
            font-size: 1.2rem;
            border: none;
            cursor: pointer;

            &:focus, :hover {
                background-color: lightgrey;
            }
        }
    }
`

export const InputSearch = styled.input`
    height: 100%;
    font-size: 1.5rem;
    padding: 12px;
    flex: 1;
    border: none;
    border-radius: 3px;

    &:focus {
        border:none;
    }
`

export const SubmitButton = styled.input`
    border: 0;
    outline: 0;
    padding: 5px 10px;
    cursor: pointer;
    background-image: url(${svgPesquisar});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 56px;
    border-radius: 3px;
`

export const CategoriesContainer = styled.div`
    margin: 48px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
    justify-content: center;
    align-items: center;
`

export const CategoryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    min-width: 80px;
    cursor: pointer;

`

export const MainContainer = styled.div`
    margin-top: 48px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
`

export const AdItem = styled.div`
    width: 260px;
    height: 320px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;

    img {
        flex: 1;
        border-radius: 4px;
    }

    h3 {
        text-align: center;
    }
    span {
        text-align: center;
    }
`

export const MostViewedContainer = styled.div`
    margin: 48px 0;
    height: 500px;
    background-color: lightgrey;
    padding: 64px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;

    h2 {
        font-size: 2.2rem;
    }
`

export const MostViewedWrapper = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
`

export const AdItemSmaller = styled(AdItem)`
    height: 160px;
    width: 192px;

    h3 {
        font-size: 0.9rem; 
    }

    p {
        font-size: 0.75rem;
    }
`

export const ModelBoxContainer = styled.div`
    margin: 0 auto;
    max-width: 640px;
`

export const ModelBox = styled.div`
    display: flex;
    background-color: purple;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 32px;
    box-shadow: 0px 0px 3px black;
`

export const LeftSide = styled.div`
    flex: 1;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 24px;



`

export const RightSide = styled.div`

    img {
        width: 320px;
    }
`