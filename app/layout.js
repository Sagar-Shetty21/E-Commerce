'use client'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlobalStyle from '@components/GlobalStyle';
import {CartContextProvider} from '@context/CartContext';

export const metadata = {
    title: "SVR Color Lab",
    description: "An Ecommerce website to order products of a local photo studio."
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <GlobalStyle>
            <CartContextProvider>
                <body>
                    <Navbar />
                    <main className="app">
                        {children}
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </body>
            </CartContextProvider>
        </GlobalStyle>
    </html>
  )
}

export default Rootlayout