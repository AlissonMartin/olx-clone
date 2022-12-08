import styled from "styled-components";
import { Button } from "../../components/common/Button";

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

    .bigPic {
        flex: 1;
        cursor: pointer;
    }

    .smallPics {
        display: flex;
        flex-direction: column;
        gap: 4px;


        img {
            width: 75px;
            height: 75px;
            border-radius: 4px;
            cursor: pointer;
            transition: all ease .3s;
        }

        .active {
            filter: blur(1px);
        }
    }
`
export const RightSide = styled.div`
    width: 300px;
    flex: 1;
    color: #4A4A4A;
`

export const Price = styled.p`
    font-size: 1.6rem;

`

export const UserInfo = styled.div`
    margin-top: 32px;
    padding: 12px;
    text-align: center;
    background-color: rgb(249, 249, 249);
    box-shadow: inset 0 0 2px black;
    border-radius: 3px;
    color: #4A4A4A;
`

export const AdInfo = styled.div`
    color: #4A4A4A;
`

export const DescriptionBox = styled.div`
    background-color: #064973;
    color: white;
    font-size: 0.7rem;
    padding: 4px;
    display: inline;
    margin: 8px ;
`

export const Description = styled.div`
    padding: 12px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-wrap: anywhere;
    max-width: 600px;
`

export const AdsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin: 32px 0;
`

export const AdButton = styled(Button)`
    width: 90%;
    height: 48px;
    display: block;
    margin: 24px auto;
    border-radius: 0px;
    font-size: 1rem;
`