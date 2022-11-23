import styled from "styled-components";
import { Button } from '../../components/common/Button'
import svgPesquisar from '../../assets/icons8-pesquisar.svg'

export const HomeContainer = styled.div`
    background-color: purple;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;

`

export const SearchArea = styled.div`

    form {
        display: flex;
        height: 64px;
        justify-content: center;
        align-items: center;
        gap: 8px;

        select {
            height: 100%;
            font-size: 1.2rem;
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