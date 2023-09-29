'use client'

import React from 'react'
import GlobalStyle from './GlobalStyle'
import AllContextsProvider from './AllContextsProvider'
import Footer from './Footer'
import Navbar from './Navbar'

const App = ({children}) => {
  return (
    <>
        <GlobalStyle>
            <AllContextsProvider>
                <body>
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