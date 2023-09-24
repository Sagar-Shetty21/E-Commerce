'use client'

import Center from "@components/Center";
import ColorOptions from "@components/ColorOptions";
import DimensionOptions from "@components/DimensionOptions";
import FrameDesignOptions from "@components/FrameDesignOptions";
import ProductDetailsCarousel from "@components/ProductImageCarousel";
import SizeOptions from "@components/SizeOptions";
import axios from "axios";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  font-family: "Urbanist", sans-serif;
  padding-top: 20px; /* You can use props for dynamic values if needed */
`;

const Wrapper = styled.div`
  /* Add your Wrapper styles here */
`;

const LeftColumn = styled.div`
  flex: 1.5;
  max-width: 500px;
  max-width: 100%;
  margin: auto;
  margin-right: 0;
`;

const RightColumn = styled.div`
  flex: 1;
  padding-top: 3px; /* Use props for dynamic values if needed */
  /* Add your RightColumn styles here */
`;

const ProductTitle = styled.div`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: normal;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  /* Add your ProductPrice styles here */
`;

const TaxInfo = styled.div`
  font-size: 14px;
  font-weight: medium;
  color: rgba(0, 0, 0, 0.5);
  /* Add your TaxInfo styles here */
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  padding-left: 10px;
  margin: 0 -25px; /* Adjust negative margin to match your design */
  
  & > * {
    margin: 0 25px; /* Adjust margin as needed */
  }
`;
const ProductDescTitle = styled.div`
  font-size: 1.25rem; /* Equivalent to text-lg */
  font-weight: bold;
  margin-bottom: .7rem; /* Equivalent to mb-5 */
`;
const ProductDescInfo = styled.div`
  font-size: 0.9rem; /* Equivalent to text-md */
  margin-bottom: 1.25rem; /* Equivalent to mb-5 */
`;
const AddToCartBtn = styled.button`
  width: 100%; /* Equivalent to w-full */
  padding: 1rem 0; /* Equivalent to py-4 */
  border-radius: 9999px; /* Equivalent to rounded-full */
  background-color: black;
  color: white;
  font-size: 1.25rem; /* Equivalent to text-lg */
  font-weight: 500; /* Equivalent to font-medium */
  transition: transform 0.2s, opacity 0.2s; /* Equivalent to transition-transform */
  cursor: pointer;
  margin-bottom: 1rem; /* Equivalent to mb-3 */

  &:hover {
    opacity: 0.75; /* Equivalent to hover:opacity-75 */
  }

  &:active {
    transform: scale(0.95); /* Equivalent to active:scale-95 */
  }
`;


const ProductPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    const [selectedDimension, setSelectedDimension] = useState(null);

    const [productPrice, setProductPrice] = useState("")

    useEffect(() => {
        const res = axios.get(`/api/products?id=${id}`).then(response => {
            setProduct(response.data);
            setProductPrice(response.data.price)
        })
    },[])
    
    return(
        <Center>
            <Container>
                <Wrapper>
                    <StyledContainer>
                        <LeftColumn>
                            <ProductDetailsCarousel images={product.images}/>
                        </LeftColumn>

                        <RightColumn>
                            {/* PRODUCT TITLE */}
                            <ProductTitle>{product.title}</ProductTitle>

                            {/* PRODUCT PRICE */}
                            <ProductPrice>
                            MRP : &#8377;{productPrice}
                            </ProductPrice>

                            <TaxInfo>incl. of taxes</TaxInfo>
                            <TaxInfo>{`(Also includes all applicable duties)`}</TaxInfo>

                            {product.properties?.dimensions.length > 0 && <DimensionOptions data={product.properties.dimensions} setSelectedDimension={setSelectedDimension} selectedDimension={selectedDimension} setProductPrice={setProductPrice}/>}
                            {product.properties?.size.length > 0 && <SizeOptions data={product.properties.size} />}
                            {product.properties?.color.length > 0 && <ColorOptions data={product.properties.color} />}
                            {product.properties?.frame.length > 0 && <FrameDesignOptions data={product.properties.frame} />}


                            <AddToCartBtn>Add to Cart</AddToCartBtn>

                            {/* WHISHLIST BUTTON START */}
                            
                            {/* WHISHLIST BUTTON END */}

                            <div>
                                <ProductDescTitle>Product Details</ProductDescTitle>
                                <ProductDescInfo>
                                    {product.description}
                                </ProductDescInfo>
                            </div>
                        </RightColumn>
                    </StyledContainer>

                    {/* RelatedProducts component */}
                    {/* You can style RelatedProducts separately or pass styles as props */}
                </Wrapper>
            </Container>
        </Center>
    )
}

export default ProductPage;
