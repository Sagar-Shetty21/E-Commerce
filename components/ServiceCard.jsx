'use client'

import styled from "styled-components"

const ServiceBox = styled.div`
    margin-top: 25px;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 5px 0 rgb(20 17 17 / 25%);
    position: relative;
    overflow: hidden;
    transition: all 0.3s;

    &::before {
        content: "";
        width: 275px;
        height: 275px;
        position: absolute;
        right: -137.5px;
        bottom: -137.5px;
        background-color: #ebebeb;
        z-index: -1;
        border-radius: 100%;
        transition: all 0.8s;
    }
    &:hover {
        &::before {
            transform: scale(5);
            background-color: #000000;
        }
        color: white;
        img {
            filter: invert(0);
        }
    }

    @media (max-width: 768px) {
        
    }
`;

const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 125px;
    border-radius: 15px;
    transition: all 0.3s;

    img {
        width: 80%;
        max-height: 100%;
        transition: all 0.3s;
    }
`;

const DetailBox = styled.div`
    margin-top: 15px;
    text-align: center;
`;

const ServiceTitle = styled.h2`
    font-weight: bold;
    position: relative;
`

const ServiceCard = ({info}) => {
    return (
        <ServiceBox>
            <ImageBox>
                <img src={info.image} alt="" />
            </ImageBox>
            <DetailBox>
                <ServiceTitle>{info.title}</ServiceTitle>
                <p>{info.subTitle}</p>
            </DetailBox>
        </ServiceBox>
    )
}

export default ServiceCard