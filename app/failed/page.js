'use client'

import styled from 'styled-components';
import Link from 'next/link';
import Center from '@components/Center';

const StyledWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled.div`
  max-width: 600px;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 1.25rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 1rem;
  margin-top: 1.25rem;
`;

const EmailLink = styled.a`
  text-decoration: underline;
  color: grey;
`;

const ContinueShoppingLink = styled(Link)`
  font-weight: bold;
  margin-top: 1.25rem;
  color: #eee;
  background-color: black;
  padding: 10px 20px;
  border-radius: 12px;
`;

const PaymentFailed = () => {
  return (
    <Center>
        <StyledWrapper>
            <StyledContainer>
                <Title>Payment failed!</Title>
                <Text>For any product related query, drop an email to</Text>
                <EmailLink href="mailto:svrlabkrpur2020@gmail.com">svrlabkrpur2020@gmail.com</EmailLink>
                <ContinueShoppingLink href="/">Continue Shopping</ContinueShoppingLink>
            </StyledContainer>
        </StyledWrapper>
    </Center>
  );
};

export default PaymentFailed;
