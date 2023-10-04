'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Center from './Center';
import { useContext, useState } from 'react';
import { CartContext } from '@context/CartContext';

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 20;
`;
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 220px;
  @media screen and (max-width: 767px) {
    width: 160px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media screen and (max-width: 767px) {
    padding: 10px 0;
  }
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
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const CartNavLink = styled(Link)`
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
const NavExpandBtn = styled.div`
  display: none;
  svg{
    height: 35px;
  }
  @media screen and (max-width: 767px) {
    display: block;
  }
`;
const NavDrop = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  width: calc(100vw - 10px);
  left: 0;
  font-size: 1.3rem;
  z-index: 20;
  @media screen and (max-width: 767px) {
    display: block;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
  a{
    color: #aaa;
    font-weight: bold;
    padding: 5px;
  } 
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  z-index: 15;
`


const Navbar = () => {
  const {cartProducts} = useContext(CartContext);
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <StyledHeader>
        <Center>
          <Wrapper>
            <NavExpandBtn onClick={() => setNavActive(!navActive)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
              </svg>
            </NavExpandBtn>
            <LogoContainer href="/"><Logo src="/assets/company-logo.svg" alt="logo"/></LogoContainer>
            <StyledNav>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink> 
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/account">Account</NavLink>
              <CartNavLink href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                </svg>
                {cartProducts?.length > 0 && 
                  <CartItemsCount>
                    {cartProducts?.length}
                  </CartItemsCount>
                }
              </CartNavLink>
            </StyledNav>
          </Wrapper>
          {navActive &&
            <NavDrop>
                <a href="/">Home</a>
                <a href="/products">Products</a> 
                <a href="/services">Services</a>
                <a href="/account">Account</a>
            </NavDrop>
          }
        </Center>
      </StyledHeader>
      {navActive &&
        <Backdrop onClick={() => setNavActive(false)} />
      }
    </>
  )
}

export default Navbar
