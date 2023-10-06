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
        overflow-x: hidden;
    } 
    a{
        text-decoration: none;
    }
    @keyframes shake {
      0% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
      20%, 40%, 60%, 80% { transform: translateX(10px); }
      100% { transform: translateX(0); }
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