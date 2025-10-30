import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
}

export const CartContextProvider = ({ children }) => {
  const [cartedProducts, setCartedProducts] = useState([]);
  const [cartProductCount, setCartProductCount] = useState(0);

  const isProductCart = (productName) => {
    return cartedProducts.some(p => p.product_name === productName);
  }

  const addToCart = (productObj, count=1) => {
    if (!isProductCart(productObj.product_name)) {
      const tempList = [...cartedProducts];
      tempList.push(productObj);
      setCartedProducts(tempList);
      setCartProductCount(prev=>prev+count);
    }
  }

  const removeFromCart = (productName) => {
    if (isProductCart(productName)) {
      const tempList = cartedProducts.filter((p)=>p.product_name !== productName);
      setCartedProducts(tempList);
      setCartProductCount(prev=>prev-1);
    }
  }

  const value = {
    cartedProducts,
    cartProductCount,
    isProductCart,
    addToCart,
    removeFromCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}