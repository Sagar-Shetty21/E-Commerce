'use client'
import styled from 'styled-components';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { CartContext } from '@context/CartContext';
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
  font-size: 1.125rem; 
  font-weight: bold;
`;

// Summary card
const SummaryCard = styled.div`
  padding: 1.25rem;
  margin: 1.25rem 0;
  background-color: rgba(0, 0, 0, 0.05); 
  border-radius: 0.625rem; 
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

  @media (min-width: 768px) {
    flex-direction: row; /* lg:flex-row */
  }
`;

const ToggleBtnContainer = styled.div`
    text-align: center;
    margin: 15px 0;

    label {
      font-size: 13px;
      color: #424242;
      font-weight: 500;
    }
    
    .btn-color-mode-switch{
        display: inline-block;
        margin: 0px;
        position: relative;
    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner{
        margin: 0px;
        width: 240px;
        height: 30px;
        background: #E0E0E0;
        border-radius: 26px;
        overflow: hidden;
        position: relative;
        transition: all 0.3s ease;
        display: block;
    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner:before{
        content: "Delivery";
        position: absolute;
        font-size: 12px;
        font-weight: 500;
        top: 7px;
        right: 20px;

    }

    .btn-color-mode-switch > label.btn-color-mode-switch-inner:after{
        content: "Instore pickup";
        width: 120px;
        height: 16px;
        font-weight: bold;
        background: #fff;
        border-radius: 26px;
        position: absolute;
        left: 2px;
        top: 2px;
        text-align: center;
        transition: all 0.3s ease;
        box-shadow: 0px 0px 6px -2px #111;
        padding: 5px 0px;
    }

    .btn-color-mode-switch > .alert{
        display: none;
        background: #FF9800;
        border: none;
        color: #fff;
    }

    .btn-color-mode-switch input[type="checkbox"]{
        cursor: pointer;
        width: 50px;
        height: 25px;
        opacity: 0;
        position: absolute;
        top: 0;
        z-index: 1;
        margin: 0px;
    }

    .btn-color-mode-switch input[type="checkbox"]:checked + label.btn-color-mode-switch-inner{
        //background: #151515;
        ///color: #fff;
    }

    .btn-color-mode-switch input[type="checkbox"]:checked + label.btn-color-mode-switch-inner:after{
        content: "Delivery";
        left: 118px;
        //background: #3c3c3c;
    }

    .btn-color-mode-switch input[type="checkbox"]:checked + label.btn-color-mode-switch-inner:before{
        content: "Instore pickup";
        right: auto;
        left: 20px;
    }

    .btn-color-mode-switch input[type="checkbox"]:checked ~ .alert{
        display: block;
    }

`;

const AddressInputContainer = styled.div`
  width: calc(100% - 18px);
  padding: 5px;
  border: 4px solid black;
  border-radius: 8px;
  margin: 10px 0;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: .25rem;
  border-radius: .25rem;
  margin: 5px;

  &:focus-within {
    border-color: #000;
  }
`;

const FieldLabel = styled.span`
  color: grey;
  font-size: 0.6rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.1rem
`;

const FieldInput = styled.input`
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
const FieldInputArea = styled.textarea`
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  resize: none;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`


const CartPage = () => {
  const {cartProducts} = useContext(CartContext);
  const [deliveryCharges, setDeliveryCharges] = useState(0);
  const [deliveryActive, setDeliveryActive] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  const subTotal = () => {
    const subtotal = cartProducts.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);
    return subtotal;
  }

  const deliveryAddressActive = () => {
    setDeliveryCharges(50)
  }
  
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
                  {cartProducts.map((product, i) => (
                    <CartItem key={i} index={i} item={product} quantity={product.quantity}/>
                  ))}
                </CartContent>
              </CartItemsContainer>

              <CartSummaryContainer>
                <CartSummaryHeading>Summary</CartSummaryHeading>
                <SummaryCard>
                  <ToggleBtnContainer>
                      <label class="switch btn-color-mode-switch">
                          <input type="checkbox" name="color_mode" id="color_mode" value={deliveryActive} onChange={() => setDeliveryActive(!deliveryActive)} />
                          <label for="color_mode" data-on="Dark" data-off="Light" class="btn-color-mode-switch-inner"></label>
                      </label>
                  </ToggleBtnContainer>
                  {deliveryActive && 
                    <AddressInputContainer>
                      <Field>
                        <FieldLabel for="firstname">Name</FieldLabel>
                        <FieldInput type="text" id="firstname" value={name} onChange={(e) => setName(e.target.value)} />
                      </Field>
                      <Field>
                        <FieldLabel for="contact">Contact number</FieldLabel>
                        <FieldInput type="number" id="contact" value={number} onChange={(e) => setNumber(e.target.value)} />
                      </Field>
                      <Field>
                        <FieldLabel for="zipcode">Pincode</FieldLabel>
                        <FieldInput type="number" id="zipcode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                      </Field>
                      <Field>
                        <FieldLabel for="address">Address</FieldLabel>
                        <FieldInputArea rows="4" type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                      </Field>
                    </AddressInputContainer>
                  }
                  <SubtotalRow>
                    <SubtotalLabel>Subtotal</SubtotalLabel>
                    <SubtotalValue>&#8377;{subTotal() + deliveryCharges}</SubtotalValue>
                  </SubtotalRow>
                  <SubtotalExplanation>
                    The subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. It does not include any transaction fees.
                  </SubtotalExplanation>
                </SummaryCard>
                <CheckoutButton onClick={() => console.log("paying "+ subTotal())}>
                  Checkout
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
              Go ahead and explore our top products.
            </EmptyCartText>
            <ContinueShoppingButton href="/">Continue Shopping</ContinueShoppingButton>
          </EmptyCartContainer>
        )}
      </CartPageContainer>
    </Center>
  );
};

export default CartPage

