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
  &:hover{
    color: #ee6161;
  }
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
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  ${props => props.expandCard && css`
    max-height: 550px;
    padding: 0 10px;
  `}
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const MoreInfoContainer = styled.div`
  border: 2px solid #F1F1F1;
`;

const ColorInfo = styled.div`
  margin: 5px;
  border: 3px solid #d1d1d1;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const InfoTitle = styled.div`
  font-weight: bold;
`;

const ColorDemo = styled.div`
  height: 25px;
  width: 40px;
  border-radius: 5px;
`;

const DimensionInfo = styled.div`
  margin: 5px;
  border: 3px solid #d1d1d1;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
const SizeInfo = styled.div`
  margin: 5px;
  border: 3px solid #d1d1d1;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

const FrameDesignInfo = styled.div`
  margin: 5px;
  border: 3px solid #d1d1d1;
  padding: 5px;
  border-radius: 5px;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`

const FrameImage = styled.img`
  width: 100%;
`;

const CustomerUploadInfo = styled.div`
  margin: 5px;
  border: 3px solid #d1d1d1;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
    border-radius: 10px;
  }
`;

const CustomerMessageInfo = styled.div`
  margin: 5px;
  border: 3px solid #d1d1d1;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextMessage = styled.div`
  background-color: #D1D1D1;
  color: #000000;
  padding: 10px;
  width: calc(100% - 20px);
  border-radius: 5px;
`;

const EmptyInfoBox = styled.div`
  margin: 5px;
  border: 3px solid #d1d1d1;
  background-color: #d1d1d1;
  color: white;
  font-weight: bold;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const LeftInfo = styled.div`

`;

const RightInfo = styled.div`
  
`;

// Usage example in your component
const CartItem = ({item, quantity, index}) => {
  const {removeProduct, increaseQuantity, decreaseQuantity} = useContext(CartContext)
  const [expandCard, setExpandCard] = useState(false)
  
  return (
    <CartItemCard>
      <CartItemContainer>
        <ProductImageContainer>
          <ProductImage
            src={item.image}
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
                <Button onClick={() => decreaseQuantity(index)}>
                  <svg style={{margin: '0'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
                <SelectQuantity value={quantity} type="number" /* onChange={(e) => updateCartItem(e, 'quantity')} */ />
                <Button onClick={() => increaseQuantity(index)}>
                  <svg style={{margin: '0'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </StyledSelector>
            </SelectorsContainer>
            <DeleteIcon onClick={() => removeProduct(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </DeleteIcon>
          </SizeQuantityContainer>
        </ProductInfoContainer>
      </CartItemContainer>
      {item.properties &&
        <MoreInfoContainer>
          <MoreProductInfo expandCard={expandCard}>
            <LeftInfo>
              {item.properties.color ? 
                <ColorInfo>
                  <InfoTitle>Color : </InfoTitle>
                  <ColorDemo style={{backgroundColor: `${item.properties.color.color}`}}></ColorDemo>
                  <div>{item.properties.color.name}</div>
                </ColorInfo>
              :
                <EmptyInfoBox>
                  Product does not have any color
                </EmptyInfoBox>
              }
              {item.properties.dimension ?
                <DimensionInfo>
                  <InfoTitle>Dimension : </InfoTitle>
                  <div>{item.properties.dimension.width} x {item.properties.dimension.height}</div>
                </DimensionInfo>
              :
                <EmptyInfoBox>
                  Product does not have any dimension
                </EmptyInfoBox>
              }
              {item.properties.size ?
                <SizeInfo>
                  <InfoTitle>Size : </InfoTitle>
                  <div>{item.properties.size.sizeInfo}</div>
                </SizeInfo>
              :
                <EmptyInfoBox>
                  Product does not have any size
                </EmptyInfoBox>
              }
              {item.properties.frameDesign ?
                <FrameDesignInfo>
                  <div>
                    <InfoTitle>Frame Design : </InfoTitle>
                    <div>{item.properties.frameDesign.name}</div>
                  </div>
                  <FrameImage src={item.properties.frameDesign.image} alt="frame design" />
                </FrameDesignInfo>
              :
                <EmptyInfoBox>
                  Product does not have any frame designs
                </EmptyInfoBox>
              }
            </LeftInfo>
            <RightInfo>
              {item.properties.customerFile ?
                <CustomerUploadInfo>
                  <InfoTitle>File Uploaded</InfoTitle>
                  <img src={item.properties.customerFile} alt="customer uploaded file" />
                </CustomerUploadInfo>
              :
                <EmptyInfoBox>
                  Product does not require file upload
                </EmptyInfoBox>
              }
              {item.properties.customerMessage ?
                <CustomerMessageInfo>
                  <InfoTitle>Message</InfoTitle>
                  <TextMessage>{item.properties.customerMessage}</TextMessage>
                </CustomerMessageInfo>
              :
                <EmptyInfoBox>
                  Product does not require any message
                </EmptyInfoBox>
              }
            </RightInfo>
          </MoreProductInfo>
          <ExpandButton onClick={() => setExpandCard(!expandCard)} >
            {expandCard ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
              </svg>          
            :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
              </svg>
            }
          </ExpandButton>
        </MoreInfoContainer>
      }
    </CartItemCard>
  );
};

export default CartItem