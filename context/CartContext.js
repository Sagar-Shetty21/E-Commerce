const { createContext, useState, useEffect } = require("react");


export const CartContext = createContext({})

export const CartContextProvider = ({children}) => {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cartProducts,setCartProducts] = useState([]);

    useEffect(() => {
        if (cartProducts?.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    useEffect(() => {
    if (ls && ls.getItem('cart')) {
        setCartProducts(JSON.parse(ls.getItem('cart')));
    }
    }, []);

    function removeProduct(index) {
        setCartProducts(prev => {
            const updatedCartProducts = prev.filter((_, i) => i !== index);
            return updatedCartProducts;
        });
    }

    function clearCart() {
        setCartProducts([]);
    }

    const addToCart = (item) => {
        setCartProducts(prev => [...prev,item]);
    }

    const increaseQuantity = (index) => {
        setCartProducts(prev => {
            const updatedCartProducts = [...prev]; // Create a copy of the previous state array
            updatedCartProducts[index].quantity += 1; // Increase the quantity for the specified index
            return updatedCartProducts;
        });
    }

    const decreaseQuantity = (index) => {
        setCartProducts(prev => {
            const updatedCartProducts = [...prev]; // Create a copy of the previous state array
            if (updatedCartProducts[index].quantity > 1) {
                updatedCartProducts[index].quantity -= 1; // Decrease the quantity for the specified index if it's greater than 1
            }
            return updatedCartProducts;
        });
    }

    return(
        <CartContext.Provider value={{cartProducts, setCartProducts, addToCart, removeProduct, clearCart, increaseQuantity, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

