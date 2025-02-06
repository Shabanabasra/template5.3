"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import { client } from "@/sanity/lib/client";

// Initialize the Sanity client
const sanity = createClient({
  projectId: "fiycteh6", // Replace with your actual projectId
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

// Define the Product interface
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  productImage: string;
  tags: string[];
}

// Main ProductCards component
const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter(); // ✅ Initialize Router

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = await client.fetch(`
        *[_type == "product"] {
          _id,
          title,
          description,
          price,
          discountPercentage,
          "productImage":productImage.asset->url,
          tags
        }
      `);
      setProducts(query);
    };
    fetchProducts();
  }, []);

  // Navigate to Product Page on Button Click
  const goToProductPage = (product: Product) => {
    router.push(
      `/Products/id?id=${product._id}&title=${encodeURIComponent(
        product.title
      )}&description=${encodeURIComponent(
        product.description
      )}&price=${product.price}&discountPercentage=${
        product.discountPercentage
      }&productImage=${encodeURIComponent(product.productImage)}`
    );
  };

  // Helper function to truncate descriptions
  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  return (
    <div className="p-4">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.productImage}
              alt={product.title || "Fallback image"}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% off
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-600 text-white rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ✅ Navigate to Product Page Instead of Add to Cart */}
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800"
                onClick={() => goToProductPage(product)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;

