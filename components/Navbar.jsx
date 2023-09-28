'use client';

import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import styled from 'styled-components';
import Center from './Center';
import { useContext } from 'react';
import { CartContext } from '@context/CartContext';

const StyledHeader = styled.header`
  background-color: #fff;
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
  &:hover{
    color: #4b4b4b;
  }
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
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/account">Account</NavLink>
            <NavLink href="/cart">Cart ({cartProducts?.length})</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}

export default Navbar
