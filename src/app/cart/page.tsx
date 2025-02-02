"use client";

import React, { useState, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderStep, setOrderStep] = useState(0);
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotal = () => {
    return Number(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    setOrderStep(1);
  };

  const confirmOrder = () => {
    setOrderStep(2);
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <div className="container mx-auto p-8 min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>

      {orderStep === 2 ? (
        <div className="bg-green-100 text-green-800 p-6 rounded text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold">✅ Success!</h2>
          <p>Your order has been successfully processed.</p>
          <button className="mt-4 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition" onClick={() => setOrderStep(0)}>
            OK
          </button>
        </div>
      ) : orderStep === 1 ? (
        <div className="bg-yellow-100 text-yellow-800 p-6 rounded text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold">⏳ Processing your order...</h2>
          <p>Please wait a moment.</p>
          <div className="mt-4">
            <button className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-700 transition mx-4" onClick={confirmOrder}>
              ✅ Proceed
            </button>
            <button className="bg-red-500 text-white py-3 px-6 rounded hover:bg-red-700 transition mx-4" onClick={() => setOrderStep(0)}>
              ❌ Cancel
            </button>
          </div>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          {/* Cart Items Section */}
          <div className="bg-white p-8 shadow-lg rounded w-full">
            <h2 className="text-2xl font-semibold mb-6">Cart Items</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-6 p-4 border-b">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover mr-6" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-6 text-lg font-semibold">Total: ${calculateTotal()}</div>
          </div>

          {/* Billing Information Section */}
          <div className="bg-gray-100 p-8 shadow-lg rounded w-full">
            <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="firstName" placeholder="First Name" value={billingInfo.firstName} onChange={handleInputChange} className="border p-3 rounded w-full" />
              <input type="text" name="lastName" placeholder="Last Name" value={billingInfo.lastName} onChange={handleInputChange} className="border p-3 rounded w-full" />
              <input type="text" name="address" placeholder="Address" value={billingInfo.address} onChange={handleInputChange} className="border p-3 rounded w-full" />
              <input type="text" name="city" placeholder="City" value={billingInfo.city} onChange={handleInputChange} className="border p-3 rounded w-full" />
              <input type="text" name="zipCode" placeholder="Zip Code" value={billingInfo.zipCode} onChange={handleInputChange} className="border p-3 rounded w-full" />
              <input type="text" name="phone" placeholder="Phone" value={billingInfo.phone} onChange={handleInputChange} className="border p-3 rounded w-full" />
              <input type="email" name="email" placeholder="Email" value={billingInfo.email} onChange={handleInputChange} className="border p-3 rounded w-full" />
            </div>
            {/* Checkout Button */}
            <div className="mt-8">
              <button
                className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full text-lg"
                onClick={handleCheckout}
                disabled={
                  !billingInfo.firstName ||
                  !billingInfo.lastName ||
                  !billingInfo.address ||
                  !billingInfo.city ||
                  !billingInfo.zipCode ||
                  !billingInfo.phone ||
                  !billingInfo.email
                }
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;







