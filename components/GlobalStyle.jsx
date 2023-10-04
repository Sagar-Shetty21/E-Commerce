'use client'

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Urbanist:wght@400;600&display=swap');
    body{
        padding: 0;
        margin: 0;
        font-family: 'Josefin Sans', sans-serif;
        background-color: #FCFCFF;
        min-height: 100vh;
    }
    a{
        text-decoration: none;
    }
`

const GlobalStyle = ({children}) => {
  return (
    <>
        <GlobalStyles />
        {children}
    </>
  )
}

export default GlobalStyle