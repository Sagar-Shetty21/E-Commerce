import styled from "styled-components"
import Link from "next/link";


const CardWrapper = styled.div`

`;
const Card = styled(Link)`
    background-color: #eee;
    padding: 15px;
    height: 160px;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 10px;
    div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }
    @media screen and (max-width: 767px) {
        height: 130px;
        padding: 10px;
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
            </PriceInfo>
        </ProductInfo>
    </CardWrapper>
    
  )
} 

export default ProductCard