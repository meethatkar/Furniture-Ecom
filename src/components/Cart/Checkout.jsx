import React, { useEffect, useState } from "react";
import { useCart } from "../../Context/Shopping/Cart";
import { useAuth } from "../../Context/UserAuth/UserAuth";

const Checkout = () => {
  const [totalPrice, settotalPrice] = useState(0);
  const [priceSum, setpriceSum] = useState(0);
  const [GSTValue, setGSTValue] = useState(0);
  const { cartedProducts } = useCart();
  const { user } = useAuth();

  useEffect(()=>{
    if(cartedProducts && cartedProducts.length > 0){
      let tempPriceSum = cartedProducts.reduce(
        (acc,val)=>{
          if(val.quantity === 1){
            return acc+val.product_price;
          }
          else{
            let tempQtyPrice = val.product_price * val.quantity;
            return acc+tempQtyPrice;
          }
        }, 0);
      setpriceSum(tempPriceSum);
      let GST = tempPriceSum * 0.18;
      setGSTValue(GST);
      tempPriceSum = tempPriceSum + (GST + 50);
      settotalPrice(tempPriceSum);
    }
  }, [cartedProducts])

  return (
    <div className="bg-gray-50 flex flex-col items-center w-full sticky top-[5%]">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8 flex flex-col gap-6">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-yellow-600 border-b-4 border-yellow-500 pb-2">
          Checkout Summary
        </h2>

        {/* User Info */}
        <div className="flex flex-col gap-3 text-lg">
          <p><span className="font-medium">Name:</span> {user.name}</p>
          <p><span className="font-medium">Address:</span> {user.address} </p>
        </div>

        {/* Product List */}
        <div className="w-full flex flex-col gap-4 border-t pt-4">
          <h3 className="text-2xl font-semibold text-gray-700">Your Products</h3>

          {cartedProducts.map((p, i) => (
            <div className="flex justify-between w-full border-b border-b-gray-300 pb-2" key={i}>
              <span className="text-lg text-gray-700 w-9/12">Product {i+1} - {p.product_name}</span>
              <span className="text-lg font-medium flex items-center justify-end w-3/12 text-end">{p.quantity} x {p.product_price}</span>
            </div>
          ))}
        </div>

        {/* Price Summary */}
        <div className="w-full flex flex-col gap-2 border-t pt-4 text-lg">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{priceSum.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (18%):</span>
            <span>₹{GSTValue.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee:</span>
            <span>₹50</span>
          </div>

          <div className="flex justify-between font-semibold text-xl text-gray-900 border-t pt-3">
            <span>Total:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 bg-yellow-600 text-white text-lg font-medium py-3 rounded-xl hover:bg-yellow-700 transition-all duration-300">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
