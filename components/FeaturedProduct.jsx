import styled from "styled-components"
import Center from "./Center"
import Button from "./Button";
import LinkButton from "./LinkButton";
import { useContext } from "react";
import { CartContext } from "@context/CartContext";
import Link from "next/link";

const Background = styled.div`
  background-color: #222;
  color: #fff;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
  }
`;
const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  @media screen and (max-width: 767px) {
    font-size: 0.6rem;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  padding: 40px 0;
  img{
    max-width: 100%;
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    padding: 30px 0;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
const InfoColumn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    order: 2;
  }
`;
const ImageColumn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    order: 1;
    padding: 0 20px;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;


const FeaturedProduct = ({data}) => {

  return (
    <Background>
      <Center>
        <Wrapper>
          <InfoColumn>
            <div>
              <Title>{data?.title}</Title>
              <Description>{data?.description}</Description>
              <ButtonsWrapper>
                <LinkButton href={`/product/${data._id}`} white={1} outline={1} size="l">View</LinkButton>
                <Link href={`/product/${data._id}`}>
                  <Button primary={1} size="l">
                    Get Now
                  </Button>
                </Link>
              </ButtonsWrapper>
            </div>
          </InfoColumn>
          <ImageColumn>
            <img src={data?.images?.[0]} />
          </ImageColumn>
        </Wrapper>
      </Center>
    </Background>
  )
}

export default FeaturedProduct