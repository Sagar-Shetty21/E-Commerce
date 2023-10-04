'use client';

import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import styled from 'styled-components';
import Center from './Center';
import { useContext } from 'react';
import { CartContext } from '@context/CartContext';

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 220px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const NavLink = styled(Link)`
  color: #aaa;
  font-weight: bold;
  position: relative;
  &:hover{
    color: #4b4b4b;
  }

  svg{
    height: 28px;
    width: 28px;
  }
`;
const CartItemsCount = styled.div`
  position: absolute;
  background-color: red;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  top: 0;
  right: 0;
  color: white;
  text-align: center;
  padding: 2px;
  font-size: 10px;
`;

const Navbar = () => {
  const {cartProducts} = useContext(CartContext);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <LogoContainer href="/"><Logo src="/assets/company-logo.svg" alt="logo"/></LogoContainer>
          <StyledNav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink> 
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/account">Account</NavLink>
            <NavLink href="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
              </svg>
              {cartProducts?.length > 0 && 
                <CartItemsCount>
                  {cartProducts?.length}
                </CartItemsCount>
              }
            </NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}

export default Navbar
