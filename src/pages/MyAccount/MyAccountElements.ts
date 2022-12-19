import styled from "styled-components";
import userIcon from '../../assets/userIcon.png'

export const FormsArea = styled.div`
    display: flex;
    width: 100%;
    gap: 48px;
    padding: 32px;

    p {
        font-size: 1.4rem;
        color: #4A4A4A;
    }
`

export const Label = styled.label`
    padding: 4px;
    color: #4A4A4A;
    font-size: 1.4rem;
`

export const InputArea = styled.div`

`

export const Input = styled.input`
    padding: 6px 10px;
    font-size: 1.2rem;
    width: 60%;

    &::placeholder {
        color: black;
        font-weight: bold;
    }
`

export const SubmitButton = styled.input`
    font-size: 1.4rem;
    padding: 4px;
    width: 50%;
    margin: 10px auto;
    cursor: pointer;
`

export const SelectInputArea = styled.div`

`

export const Select = styled.select`
    background-color: white;
    padding: 6px;
    font-size: 1.2rem;
`

export const LeftSide = styled.div`
    flex: 1;

    form {
        background-color: #fff;
        border-radius: 3px;
        padding: 48px 32px;
        box-shadow: 0px 0px 3px #999;
        display: flex;
        flex-direction: column;
        gap: 8px;
        position: relative;

        .editButton {
            position: absolute;
            top: 5%;
            right: 5%;
            padding: 8px;
            font-size: 1.2rem;
            background-color: white;
            border: 1px solid black;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.267);
            cursor: pointer;

            &:hover {
                background-color: lightgrey;
            }
        }
    }
`

export const RightSide = styled.div`
    p {
        margin-top: 16px;
        text-align: center;
    }

`

export const UserPhoto = styled.div`
    margin-top: 16px;
    aspect-ratio: 1 / 1;
    width: 272px;
    background-color: grey;
    background-size: cover;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 0 1px black;

    input {
        display: none;

    }

    label {
        width: 60px;
        height: 60px;
        cursor: pointer;
        display: block;
    }
`

export const InputPhoto = styled.div`
    position: absolute; 
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    background-image: url(${userIcon});
    background-size: cover;

    p {
        font-size: 1.6rem;
        margin-top: 0;
        color: black;
        cursor: default;
        user-select: none;
    }
`
