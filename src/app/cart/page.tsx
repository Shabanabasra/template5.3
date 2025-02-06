"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

interface CartItem {
  id: string; // ✅ Fix: id ko string banaya
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  // ✅ **Latest Orders Fetch Karna**
  const fetchLatestOrders = async () => {
    try {
      const orders = await client.fetch(`
        *[_type == "order"] | order(_createdAt desc) {
          _id,
          customerName,
          email,
          address,
          phone,
          totalAmount,
          items[] {
            name,
            price,
            quantity,
            imageUrl
          }
        }
      `);
      console.log("Latest Orders:", orders);
    } catch (error) {
      console.error("Error fetching latest orders:", error);
    }
  };

  useEffect(() => {
    // ✅ Local Storage se cart data load karein
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    fetchLatestOrders(); // ✅ Orders ko real-time update karein
  }, [orderPlaced]);

  const calculateTotal = () => {
    return Number(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ **Order Checkout & Latest Orders Fetch**
  const handleCheckout = async () => {
    if (cartItems.length === 0) return alert("Cart is empty!");

    try {
      const orderData = {
        _type: "order",
        customerName: `${billingInfo.firstName} ${billingInfo.lastName}`,
        email: billingInfo.email,
        address: `${billingInfo.address}, ${billingInfo.city}, ${billingInfo.zipCode}`,
        phone: billingInfo.phone,
        totalAmount: calculateTotal(),
        items: cartItems.map((item) => ({
          _type: "orderItem",
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          imageUrl: item.imageUrl,
        })),
        status: "pending",
      };

      await client.create(orderData); // ✅ Order Sanity me save karein
      setOrderPlaced(true); // ✅ Order update karne ka signal
      setCartItems([]);
      localStorage.removeItem("cartItems");

      fetchLatestOrders(); // ✅ Checkout ke baad naye orders ko load karein
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="container mx-auto p-8 min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>

      {orderPlaced ? (
        <div className="text-center bg-green-100 p-6 rounded">
          <h2 className="text-2xl font-semibold">✅ Order Placed Successfully!</h2>
          <p>Your order has been saved in Sanity Studio.</p>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="bg-white p-8 shadow-lg rounded">
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

          {/* Billing Form */}
          <div className="bg-gray-100 p-8 shadow-lg rounded">
            <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["firstName", "lastName", "address", "city", "zipCode", "phone", "email"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={billingInfo[field as keyof typeof billingInfo]}
                  onChange={handleInputChange}
                  className="border p-3 rounded w-full"
                />
              ))}
            </div>
            <button
              className="mt-6 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full text-lg"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;