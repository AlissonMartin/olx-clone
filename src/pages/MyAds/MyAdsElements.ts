import styled from "styled-components";

export const MenuContainer = styled.div`
    padding: 0px 72px;
` 

export const MenuBar = styled.div`
    display: flex;
    gap: 64px;
    user-select: none;

    .active {
        color: purple;
    }
`

export const MenuItem = styled.div`
    position: relative;
    transition: all ease .3s;
    cursor: pointer;


    &:hover {
        color: #AD239F;
    }

    &::after {
        position: absolute;
        content: "";
        height: 2px;
        background-color: lightgrey;
        width: 120%;
        top: 24px;
        left: -10%;
    }

`

export const MainContainer = styled.div`
    padding: 48px;
    display: flex;
    flex-wrap: wrap;
    gap: 72px;

`

export const EmptyContainer = styled.div`
    padding: 60px 100px;
    background-color: #F9F9F9;
    border: 1px solid lightgrey;
    max-width: 80%;
    margin: 32px auto;
    text-align: center;
    h3 {
        font-size: 2rem;
        color: #4A4A4A;
    }
`
export const DeleteButton = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 3%;
    right: 3%;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 6px;

    &:hover {
       background-color: #BD2522;
    }

    .topBar {
        margin-left: 8px;
        transform: rotate(45deg) translateY(6px);
        width: 80%;
        height: 4px;
        background-color: white;
    }

    .bottomBar {
        margin-left: 8px;
        transform: rotate(-45deg) translateY(-5px);
        width: 80%;
        height: 4px;
        background-color: white;
    }
`