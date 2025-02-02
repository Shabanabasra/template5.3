import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

// Initialize Sanity client
const sanity = createClient({
  projectId: "fiycteh6", // Replace with your Sanity project ID
  dataset: "production", // Replace with your Sanity dataset
  apiVersion: "2025-01-13",
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

// Helper function to build image URLs
function urlFor(source) {
  return builder.image(source);
}

const ProductDetail = ({ product }) => {
  const router = useRouter();

  // Handle fallback state during ISR (Incremental Static Regeneration)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Handle case where no product is found
  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>The product you're looking for could not be found.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img
        src={urlFor(product.productImage).url()}
        alt={product.title}
        style={{ width: "300px", height: "300px" }}
        className="mt-4"
      />
      <p className="text-lg mt-4">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      {product.discountPercentage > 0 && (
        <p className="text-green-600 mt-2">
          Discount: {product.discountPercentage}%
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {product.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-200 text-gray-800 rounded-full px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;

// Fetch data for a specific product using its ID
export async function getStaticProps({ params }) {
  try {
    const query = `*[_type == "product" && _id == $id][0]`;
    const product = await sanity.fetch(query, { id: params.id });

    if (!product) {
      return { notFound: true }; // Show 404 page if no product is found
    }

    return {
      props: { product },
      revalidate: 10, // ISR: Rebuild the page every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: { product: null },
    };
  }
}

// Generate paths for all products
export async function getStaticPaths() {
  const query = `*[_type == "product"]{ _id }`;
  const products = await sanity.fetch(query);

  const paths = products.map((product) => ({
    params: { id: product._id }, // Generate a dynamic route for each product
  }));

  return {
    paths,
    fallback: true, // Enable fallback for ISR
  };
}
