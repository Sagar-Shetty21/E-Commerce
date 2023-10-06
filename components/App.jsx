'use client'

import React from 'react'
import GlobalStyle from './GlobalStyle'
import AllContextsProvider from './AllContextsProvider'
import Footer from './Footer'
import Navbar from './Navbar'
import { Toaster } from "react-hot-toast"

const App = ({children}) => {
  return (
    <>
        <GlobalStyle>
            <AllContextsProvider>
                <body>
                    <Toaster
                        position="bottom-center"
                        reverseOrder={false}
                        toastOptions={{
                            className: '',
                            style: {
                                color: '#fcfcfc',
                                backgroundColor: 'black',
                            },
                        }}
                    />
                    <Navbar />
                    <main className="app">
                        {children}
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </body>
            </AllContextsProvider>
        </GlobalStyle>
    </>
  )
}

export default App