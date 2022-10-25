import styled from "styled-components";

export const SignInTitle = styled.h1`
    font-size: 1.6rem;

`

export const FormsArea = styled.div`
    
    form {
        background-color: #fff;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
    }

    label {
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;
    }
`

export const LabelTitle = styled.div`
    width: 200px;
    text-align: right;
    padding-right:20px ;
    font-weight: bold;
    font-size: 0,8rem;

`

export const InputArea = styled.div`
    flex: 1;
`

export const LabelInput = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none;
`

export const SubmitButton = styled.button`
    border: 0;
    outline: 0;
    padding: 5px 10px;
    border-radius: 4px;
    color: #FFF;
    font-size: 15px;
    cursor: pointer
`