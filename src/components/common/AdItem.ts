import styled from "styled-components";

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