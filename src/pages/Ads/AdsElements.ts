import styled from "styled-components";
import  svgPesquisar  from '../../assets/icons8-pesquisar.svg'

export const SearchArea = styled.div`

`

export const SearchBar = styled.div`
    display: flex;
    height: 64px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 2px solid grey;
    margin: 0 32px;

    select {
        padding-left: 8px;
        height: 100%;
        font-size: 1.2rem;
        border: none;
        cursor: pointer;

        &:focus, :hover {
            background-color: lightgrey;
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

export const AdsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
    color: #4A4A4A;

    .title {
        font-size: 2rem;
    }

    .warning {
        font-size: 1.2rem;
        padding: 16px;
        text-align: center;
    }
`

export const AdWrapper = styled.div`
    display: flex;
    cursor: pointer;
    background-color: #F9F9F9;
    box-shadow: 0 0 5px lightgrey;
`

export const LeftSide = styled.img`
    width: 25%;
`

export const RightSide = styled.div`
    flex: 1;
    padding: 16px;

    h3 {
        font-size: 2.6rem;
        margin-left: 16px;
        margin-bottom: 32px;
    }

    h4 {
        font-size: 1.8rem;
        margin-left: 16px;
    }
`

export const Pagination = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 8px;

    .pageItem {
        height: 40px;
        width: 30px;
        padding: 8px;
        font-size: 1.1rem;
        font-weight: bold;
        border: 1px solid black;
        text-align: center;
        color: #4A4A4A;
        cursor: pointer;

        &:hover {
            border-color: grey;
        }
    }

    .active {
        background-color: purple;
        color: white;
    }
    

`