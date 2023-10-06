'use client'

import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 20px 0;
`;

const Title = styled.div`
    font-size: 1rem;
    font-weight: 600; 
    margin-bottom: 0.5rem;
`;

const InputBox = styled.textarea`
    width: calc(100% - 15px);
    resize: none;
    border: 3px solid black;
    border-radius: 8px;
    padding: 5px;
    height: 65px;
`;

const TextInput = React.forwardRef(({customerMessage, setCustomerMessage}, ref) => {
    return (
        <Container>
            <Title ref={ref}>Message Describing Product</Title>
            <InputBox placeholder="How would you like your product to be?" maxLength="152" value={customerMessage} onChange={(e) => setCustomerMessage(e.target.value)} />
        </Container>
    )
})

export default TextInput