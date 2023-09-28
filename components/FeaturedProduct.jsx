import styled from "styled-components"
import Center from "./Center"
import Button from "./Button";
import LinkButton from "./LinkButton";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import { CartContext } from "@context/CartContext";

const Background = styled.div`
  background-color: #222;
  color: #fff;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;
const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
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
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;


const FeaturedProduct = ({data}) => {
  const {addToCart} = useContext(CartContext);
  const handleCartAdd = () => {
    addToCart(data._id)
  }

  return (
    <Background>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>{data.title}</Title>
              <Description>{data.description}</Description>
              <ButtonsWrapper>
                <LinkButton href="/products/id" white={1} outline={1} size="l">View</LinkButton>
                <Button primary={1} size="l" onClick={() => handleCartAdd()}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src={data?.images?.[0]} />
          </Column>
        </Wrapper>
      </Center>
    </Background>
  )
}

export default FeaturedProduct