'use client'
import styled from 'styled-components';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@context/CartContext';
import axios from 'axios';
import CartItem from '@components/CartItem';
import Center from '@components/Center';

// Wrapper component for centering content
const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;



const CartPageContainer = styled.div`
  width: 100%;
  padding-top: 2.5rem; /* py-10 */
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* gap-12 */
`;

// Cart items container
const CartItemsContainer = styled.div`
  flex: 2; /* flex-[2] */
  display: flex;
  flex-direction: column;
`;

// Cart items heading
const CartItemsHeading = styled.div`
  font-size: 1.125rem; /* text-lg */
  font-weight: bold;
`;

// Cart summary container
const CartSummaryContainer = styled.div`
  flex: 1; /* flex-[1] */
  display: flex;
  flex-direction: column;
`;

// Cart summary heading
const CartSummaryHeading = styled.div`
  font-size: 1.125rem; /* text-lg */
  font-weight: bold;
`;

// Summary card
const SummaryCard = styled.div`
  padding: 1.25rem;
  margin: 1.25rem 0;
  background-color: rgba(0, 0, 0, 0.05); /* bg-black/[0.05] */
  border-radius: 0.625rem; /* rounded-xl */
`;

// Subtotal row
const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.625rem; /* mb-5 */
  font-size: 1rem; /* text-md */
`;

// Subtotal label
const SubtotalLabel = styled.div`
  text-transform: uppercase;
  font-weight: 500; /* font-medium */
  font-size: 1rem; /* text-md */
`;

// Subtotal value
const SubtotalValue = styled.div`
  font-weight: 500; /* font-medium */
  font-size: 1rem; /* text-md */
`;

// Subtotal explanation
const SubtotalExplanation = styled.div`
  font-size: 0.875rem; /* text-sm */
  margin-top: 0.625rem; /* mt-5 */
  border-top: 1px solid #000; /* border-t */
  padding-top: 0.625rem; /* py-5 */
`;

// Checkout button
const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  border-radius: 2rem; /* rounded-full */
  background-color: #000; /* bg-black */
  color: #fff; /* text-white */
  font-size: 1.125rem; /* text-lg */
  font-weight: 500; /* font-medium */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.75; /* hover:opacity-75 */
  }

  &:active {
    transform: scale(0.95); /* active:scale-95 */
  }
`;

// Heading for the cart
const CartHeading = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 28px; /* text-[28px] */
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 5px; /* mb-5 */
`;

// Cart content container
const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* lg:flex-row gap-12 */
  padding: 1.25rem 0; /* py-10 */
`;

// Cart items container
const CartItems = styled.div`
  flex: 2; /* flex-[2] */
`;

// Summary container
const SummaryContainer = styled.div`
  flex: 1; /* flex-[1] */
`;

// Summary section
const SummarySection = styled.div`
  font-weight: bold;
  font-size: 1.125rem; /* text-lg */
  margin-bottom: 1rem; /* mb-5 */
`;



// Empty cart message container
const EmptyCartContainer = styled.div`
  flex: 2; /* flex-[2] */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3.125rem; /* pb-[50px] */
  margin-top: 3.5rem; /* md:-mt-14 */
`;

// Empty cart image
const EmptyCartImage = styled.img`
  width: 300px; /* w-[300px] */
`;

// Empty cart heading
const EmptyCartHeading = styled.span`
  font-size: 1.5rem; /* text-xl */
  font-weight: bold;
  text-align: center;
  margin-top: 1rem; /* mt-4 */
`;

// Empty cart text
const EmptyCartText = styled.span`
  font-size: 1rem; /* text-center */
  text-align: center;
  margin-top: 1rem;
`;

// Continue shopping button
const ContinueShoppingButton = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 2rem; /* rounded-full */
  background-color: #000; /* bg-black */
  color: #fff; /* text-white */
  font-size: 1.125rem; /* text-lg */
  font-weight: 500; /* font-medium */
  transition: transform 0.2s, opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem; /* mt-8 */
`;
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* gap-12 */
  padding-top: 2.5rem; /* py-10 */

  @media (min-width: 1024px) {
    flex-direction: row; /* lg:flex-row */
  }
`;



const CartPage = () => {
  const {cartProducts} = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const subTotal = () => {
    let total = 0;
    for(const productId of cartProducts){
      const price = products.find(p => p._id === productId)?.price || 0;
      total += price;
    }
    return total
  }

  useEffect(() => {
    if(cartProducts.length > 0) {
      axios.post('/api/cart', {ids: cartProducts})
        .then(response => {
          setProducts(response.data);
        })
    }
  }, [cartProducts])

  return (
    <Center>
      <CartPageContainer>
        {cartProducts.length > 0 && (
          <>
            <CartHeading>Shopping Cart</CartHeading>
            
            <CartContainer>
              <CartItemsContainer>
                <CartItemsHeading>Cart Items</CartItemsHeading>
                <CartContent>
                  {products.map(product => (
                    <CartItem key={product._id} item={product} quantity={cartProducts.filter(id => id === product._id)?.length}/>
                  ))}
                </CartContent>
              </CartItemsContainer>

              <CartSummaryContainer>
                <CartSummaryHeading>Summary</CartSummaryHeading>
                <SummaryCard>
                  <SubtotalRow>
                    <SubtotalLabel>Subtotal</SubtotalLabel>
                    <SubtotalValue>&#8377;{subTotal()}</SubtotalValue>
                  </SubtotalRow>
                  <SubtotalExplanation>
                    The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include delivery costs and international transaction fees.
                  </SubtotalExplanation>
                </SummaryCard>
                <CheckoutButton onClick={() => console.log("pay")}>
                  Checkout
                  {/* {loading && <img src="/spinner.svg" alt="Loading" />} */}
                </CheckoutButton>
              </CartSummaryContainer>
            </CartContainer>
          </>
        )}
        {cartProducts.length < 1 && (
          <EmptyCartContainer>
            <EmptyCartImage src="/assets/empty-cart-animation.gif" />
            <EmptyCartHeading>Your cart is empty</EmptyCartHeading>
            <EmptyCartText>
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </EmptyCartText>
            <ContinueShoppingButton href="/">Continue Shopping</ContinueShoppingButton>
          </EmptyCartContainer>
        )}
      </CartPageContainer>
    </Center>
  );
};

export default CartPage

