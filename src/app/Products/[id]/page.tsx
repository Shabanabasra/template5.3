"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const title = searchParams?.get("title");
  const description = searchParams?.get("description");
  const price = searchParams?.get("price");
  const discountPercentage = searchParams?.get("discountPercentage");
  const productImage = searchParams?.get("productImage");

  // Add to Cart Function
  const addToCart = () => {
    if (!id || !title || !price || !productImage) {
      alert("Product details are missing!");
      return;
    }

    const newItem = {
      id,
      name: title,
      description,
      price: Number(price),
      discountPercentage: Number(discountPercentage) || 0,
      imageUrl: productImage,
      quantity: 1,
    };

    let cart = localStorage.getItem("cartItems");
    let cartItems = cart ? JSON.parse(cart) : [];

    // Check if product already exists in cart
    const existingItem = cartItems.find((item: any) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Product added to cart!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 relative h-96 md:h-auto">
            <Image
              src={productImage || "/fallback-image.jpg"}
              alt={title || "Product Image"}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
              <p className="text-gray-600 mb-6">{description}</p>
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-semibold text-gray-900">${price}</p>
                {Number(discountPercentage) > 0 && (
                  <Badge variant="secondary" className="text-sm">
                    {discountPercentage}% OFF
                  </Badge>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <Button className="w-full" size="lg" onClick={addToCart}>
                Add to Cart
              </Button>
              <Link href="/" className="block w-full">
                <Button variant="outline" className="w-full" size="lg">
                  Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

