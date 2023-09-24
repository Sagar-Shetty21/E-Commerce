import styled from "styled-components"
import Button from "./Button";
import CartIcon from "./CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@context/CartContext";

const CardWrapper = styled.div`
`;
const Card = styled(Link)`
    background-color: #eee;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 10px;
    div{
        width: 100%;
        height: 100%;
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }
`;
const Title = styled(Link)`
    margin: 0;
    font-weight: normal;
    font-size: 0.9rem;
    color: inherit;
`;
const ProductInfo = styled.div`
    margin-top: 5px;
    padding: 4px 10px;
    border: 2px solid #EEEEEE;
    border-radius: 0 0 6px 6px;
    border-top: none;
`;
const PriceInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-top: 2px;
`;
const Price = styled.div`
    padding-top: 2px;
    font-size: 1.3rem;
    font-weight: bold;
`;

const ProductCard = ({_id, title, description, price, images}) => {
  const {addToCart} = useContext(CartContext)
  const url = "/product/"+_id;
  return (
    <CardWrapper>
        <Card href={url}>
            <div>
                <img src={images[0]} /> 
            </div>
        </Card>
        <ProductInfo>
            <Title href={url}>{title}</Title>
            <PriceInfo>
                <Price>₹{price}</Price>
                <Button primary outline>
                    <svg style={{margin: '0'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </Button>
            </PriceInfo>
        </ProductInfo>
    </CardWrapper>
    
  )
} 

export default ProductCard