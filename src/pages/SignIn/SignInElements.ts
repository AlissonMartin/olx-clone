import styled from "styled-components";
import { PageContainer } from "../../components/common/PageContainer";

export const SignInPage = styled(PageContainer)`
    max-width: 420px;
    padding: 24px;
`

export const SignInTitle = styled.h1`
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
        color: #4A4A4A;
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

export const InputCheck = styled.input`
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 1rem;
`