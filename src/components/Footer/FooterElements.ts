import styled from "styled-components";

export const FooterContainer = styled.footer`
    border-top: 1px solid rgba(0, 0, 0, 0.267);
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 100vw;
    color: white;
    font-weight: bold;
    position: relative;
`
export const Socials = styled.div`
    position: absolute;
    right: 5%;
    bottom: 10%;

    img {
        width: 30px;
        margin: 0 8px;
        cursor: pointer;
    }
`