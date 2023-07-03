'use client';

import '@styles/global.css';
import { StateContext } from '../utils/context/StateContext';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
    title: "SVR Color Lab",
    description: "An Ecommerce website to order products of a local photo studio."
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <StateContext>
            <body>
                <header>
                    <Navbar />
                </header>
                <div className="main">
                    <div className="gradient"/>
                </div>

                <main className="app">
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </StateContext>
    </html>
  )
}

export default Rootlayout