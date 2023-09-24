'use client'

import { mongooseConnect } from "@lib/mongoose";
import FeaturedProduct from "@components/FeaturedProduct"
import { Product } from "@models/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import LatestProducts from "@components/LatestProducts";

async function getData() {
  await mongooseConnect();
  const product = await Product.findById("6506f4a723793379604fa4af")
  return product.json()
}

const Home = () => {
  const [featuredProduct,setFeaturedProduct] = useState({});
  const [latestProducts,setLatestProducts] = useState({});
  useEffect(() => {
    const getFeaturedProduct = async() => {
      const res = await axios.get('/api/products/featured');
      setFeaturedProduct(res.data)
    };
    const getLatestProducts = async() => {
      const res = await axios.get('/api/products/latest');
      setLatestProducts(res.data)
    };
    getFeaturedProduct();
    getLatestProducts();
  },[])

  return (
    <>
      <FeaturedProduct data={featuredProduct} />
      <LatestProducts data={latestProducts} />
    </>
  )
}

export default Home