import { Pin } from "lucide-react";
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
    const tempList = [...cartedProducts];
    const existingProduct = tempList.findIndex(
      (p)=> p.product_name === productObj.product_name
    )

    if(existingProduct !== -1){
      // product already exits in cart
      tempList[existingProduct].quantity += count;
    }
    if (!isProductCart(productObj.product_name)) {
      tempList.push({...productObj, quantity: count});
      setCartProductCount(prev=>prev+count);
    }
    setCartedProducts(tempList); 
  }

  const removeFromCart = (productName) => {
    let tempList = [];
    if (isProductCart(productName)) {
      const pIndex = cartedProducts.findIndex(
        (p)=>(p.product_name === productName)
      );
      if(cartedProducts[pIndex].quantity > 1){
        // More then one quanity
        tempList = [...cartedProducts];
        tempList[pIndex].quantity -= 1;
        setCartedProducts(tempList);
      }
      else{
        tempList = cartedProducts.filter((p)=>p.product_name !== productName);
      }
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