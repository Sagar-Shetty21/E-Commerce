'use client'

import {CartContextProvider} from '@context/CartContext';


const AllContextsProvider = ({children}) => {
  return (
    <CartContextProvider>
        {children}
    </CartContextProvider>
  )
}

export default AllContextsProvider