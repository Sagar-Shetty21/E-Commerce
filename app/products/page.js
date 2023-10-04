'use client'

import Center from "@components/Center"
import ProductCard from "@components/ProductCard"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"


const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
`
const PageTitle = styled.h1`
    text-align: center;
    padding-top: 30px;
    padding-bottom: 10px;
`;

const AllProducts = () => {
    const [allProducts,setAllProducts] = useState([]);

    useEffect(() => {
        const getAllProducts = async() => {
            const res = await axios.get('/api/products');
            setAllProducts(res.data)
        }
        getAllProducts();
    },[])

    return (
        <div>
            <Center>
                <PageTitle>All Products</PageTitle>
                <ProductsGrid>
                    {allProducts?.length > 0 && allProducts.map(product => (
                        <ProductCard key={product?._id} {...product}/>
                    ))}
                </ProductsGrid>
            </Center>
        </div>
    )
}

export default AllProducts