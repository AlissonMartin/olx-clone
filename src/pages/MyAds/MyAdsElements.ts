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