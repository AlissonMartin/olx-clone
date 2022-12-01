import styled from "styled-components";

export const Fake = styled.div<{height: string}>`
    background-color: #DDD;
    height: ${props=> props.height};
`

export const AdContainer = styled.div`
    padding: 24px;
    display: flex;
    gap: 32px;
`

export const LeftSide = styled.div`
    display: flex;
    gap: 8px;
    flex: 1;

    .bigPic {
        flex: 1;
    }

    .smallPics {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`
export const RightSide = styled.div`
    width: 300px;
`

export const UserInfo = styled.div`
    margin-top: 32px;
`

export const AdInfo = styled.div`

`