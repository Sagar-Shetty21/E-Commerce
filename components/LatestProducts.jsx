import styled from "styled-components"
import Center from "./Center"
import ProductCard from "./ProductCard"

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
`
const Title = styled.h2`
    font-size: 2rem;
    margin: 35px 0 20px;
`;

const LatestProducts = ({data}) => {
  return (
    <Center>
        <Title>New Arrivals</Title>
        <ProductsGrid>
            {data?.length > 0 && data.map(product => (
                <ProductCard key={product?._id} {...product}/>
            ))}
        </ProductsGrid>
    </Center>
  )
}

export default LatestProducts