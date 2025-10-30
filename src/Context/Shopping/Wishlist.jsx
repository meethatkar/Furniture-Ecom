import { Children, createContext, useContext, useState } from "react";

export const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
}

export const WishlistContextProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [wishlistProductList, setWishlistProductList] = useState([]);

  const addProduct = (projectObj) => {
    if (!isInWishlist(projectObj.id)) {
      const tempProductObj = [...wishlistProductList];
      tempProductObj.push(projectObj);
      setWishlistProductList(tempProductObj);
      setWishlistCount((prev) => prev + 1);
    }
  }

  const isInWishlist = (productName) => {
    console.log("Updated List: ", wishlistProductList);
    
    return wishlistProductList.some(p => p.product_name === productName);
  }

  const removeProduct = (productName) => {
    if (isInWishlist(productName)) {
      const filteredProductList = wishlistProductList.filter((product) => (product.product_name !== productName));
      setWishlistProductList(filteredProductList);
      setWishlistCount((prev) => prev - 1);
    }
  }

  const wishlistValue = {
    wishlistCount,
    isInWishlist,
    wishlistProductList,
    addProduct,
    removeProduct
  }

  return (
    <WishlistContext.Provider value={wishlistValue}>
      {children}
    </WishlistContext.Provider>
  )
}