import { CartContext } from "@context/CartContext";
import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

const CartItemCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
`

const CartItemContainer = styled.div`
  display: flex;
  padding: 0.625rem 0.4rem; /* py-5 */
  gap: 0.375rem; /* gap-3 */

  @media (min-width: 768px) {
    gap: 1.25rem; /* md:gap-5 */
  }
`;

// Styled component for the product image container
const ProductImageContainer = styled.div`
  flex-shrink: 0;
  aspect-ratio: 1/1;
  width: 50px; /* w-[50px] */

  @media (min-width: 768px) {
    width: 90px; /* md:w-[120px] */
  }
`;

// Styled component for the product image
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

// Styled component for the product information container
const ProductInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Styled component for the product title
const ProductTitle = styled.div`
  font-size: 1.125rem; /* text-lg */
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8); /* text-black/[0.8] */
  padding: 10px 0;
  @media (min-width: 768px) {
    font-size: 1.4rem; /* md:text-2xl */
  }
`;

// Styled component for the product subtitle (hidden on small screens)
const ProductSubtitle = styled.div`
  font-size: 1rem; /* text-md */
  font-weight: medium;
  color: rgba(0, 0, 0, 0.5); /* text-black/[0.5] */
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

// Styled component for the product price
const ProductPrice = styled.div`
  font-size: 1rem; /* text-md */
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5); /* text-black/[0.5] */
  margin-top: 0.3125rem; /* mt-2 */
`;

// Styled component for the product size and quantity section
const SizeQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem; /* gap-1 */
  justify-content: space-between;

  @media (min-width: 768px) {
    gap: 1rem; /* md:gap-10 */
  }
`;

// Styled component for the select input (Size)
const SelectSize = styled.select`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5); /* text-black/[0.5] */
  cursor: pointer;
  border: none;
  &:hover {
    color: #000; /* hover:text-black */
  }
  option{
    background-color: black;
    color: white;
  }
  option:checked{
    background-color: #919191;
    color: #000000;
  }
  option:hover{
    background-color: #f8f8f8;
    color: #000000;
  }
`;

// Styled component for the select input (Quantity)
const SelectQuantity = styled.input`
  font-weight: bold;
  width: 18px;
  border: none;
  text-align: center;
  color: rgba(0, 0, 0, 0.5); /* text-black/[0.5] */
  &:hover {
    color: #000; /* hover:text-black */
  }
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`;

// Styled component for the delete icon
const DeleteIcon = styled.svg`
  cursor: pointer;
  height: 1rem; /* text-[16px] */
  margin-right: 5px;
  @media (min-width: 768px) {
    font-size: 1.25rem; /* md:text-[20px] */
  }
`;
const ProductNamePriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledSelector = styled.div`
  display: flex;
  align-items: center;
  svg{
    height: 15px;
    color: #989898;
  }
  div{
    margin-right: 5px;
  }
`;
const SelectorsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const ExpandButton = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.6;
  border-top: 1px solid #cbcbcbbf;
  svg{
    height: 18px;
  }
  &:hover{
    opacity: 1;
  }
`;
const MoreProductInfo = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: 375ms cubic-bezier(0.4, 0.0, 0.2, 1);
  ${props => props.expandCard && css`
    max-height: 150px;
    padding: 0 10px;
  `}
`;

const MoreInfoContainer = styled.div`
  
`

// Usage example in your component
const CartItem = ({item, quantity}) => {
  const {removeProduct, addToCart} = useContext(CartContext)
  const [expandCard, setExpandCard] = useState(false)
  
  return (
    <CartItemCard>
      <CartItemContainer>
        <ProductImageContainer>
          <ProductImage
            src={item?.images[0]}
            alt="product image"
          />
        </ProductImageContainer>
        <ProductInfoContainer>
          <ProductNamePriceRow>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>MRP : &#8377;{quantity*item.price}</ProductPrice>
          </ProductNamePriceRow>
          <SizeQuantityContainer>
            <SelectorsContainer>
              <StyledSelector>
                <div>Quantity:</div>
                <Button onClick={() => removeProduct(item._id)}>
                  <svg style={{margin: '0'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
                <SelectQuantity value={quantity} type="number" /* onChange={(e) => updateCartItem(e, 'quantity')} */ />
                <Button onClick={() => addToCart(item._id)}>
                  <svg style={{margin: '0'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </StyledSelector>
            </SelectorsContainer>
            <DeleteIcon onClick={() => removeProduct(item._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </DeleteIcon>
          </SizeQuantityContainer>
        </ProductInfoContainer>
      </CartItemContainer>
      <MoreInfoContainer>
        <MoreProductInfo expandCard={expandCard}>
          <p>cfxdfcghj</p>
        </MoreProductInfo>
        <ExpandButton onClick={() => setExpandCard(!expandCard)} >
          {expandCard ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
            </svg>          
          :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
            </svg>
          }
        </ExpandButton>
      </MoreInfoContainer>
    </CartItemCard>
  );
};

export default CartItem