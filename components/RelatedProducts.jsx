import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  margin-bottom: 100px;
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

const StyledHeading = styled.div`
  font-size: 1.5rem; /* Equivalent to text-2xl in Tailwind CSS */
  font-weight: bold; /* Equivalent to font-bold in Tailwind CSS */
  margin-bottom: 1.25rem; /* Equivalent to mb-5 in Tailwind CSS */
`;

const RelatedProducts = ({ products }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    return (
        <Container>
            <StyledHeading>You Might Also Like</StyledHeading>
            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
            >
                {products?.data?.map((product) => (
                    <ProductCard key={product?.id} {...product} />
                ))}
            </Carousel>
        </Container>
    );
};

export default RelatedProducts;