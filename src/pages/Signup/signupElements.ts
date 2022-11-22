import styled from "styled-components";
import { PageContainer } from "../../components/common/PageContainer";

export const SignUpPage = styled(PageContainer)`
    max-width: 380px;
`

export const SignUpTitle = styled.h1`
    font-size: 1.6rem;
    margin-bottom: 12px;
`

export const FormsArea = styled.div`
    
    form {
        background-color: #fff;
        border-radius: 3px;
        padding: 48px 32px;
        box-shadow: 0px 0px 3px #999;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;
    }
`

export const LabelTitle = styled.label`
    width: 200px;
    text-align: right;
    padding-right:20px ;
    font-weight: bold;
    font-size: 0,8rem;

`

export const InputArea = styled.div`
    flex: 1;
`

export const Input = styled.input`
    width: 100%;
    height: 2.6rem;
    font-size: 1.1rem;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none;
    transition: all ease .2s;

    &:focus {
        border: 1px solid #333;
    }
`

export const SubmitButton = styled.input`
    border: 0;
    outline: 0;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    height: 3rem;
    margin: 16px 0;
`

export const ErrorMessage = styled.div`
    background-color: red;
    color: white;
    padding: 12px;
    margin: 12px 0 ;
`


export const InputCheck = styled.input`
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 1rem;
`

export const SelectInput = styled.select`
margin: 12px 0;
background-color: white;
height: 36px;
width: 160px;
padding: 4px;
`

export const SelectInputArea = styled.div`
display: flex;
justify-content: center;
`