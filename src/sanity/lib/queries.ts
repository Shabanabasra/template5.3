import { defineQuery } from "next-sanity";

export const allProductsQuery = defineQuery(`
  *[_type == "product"] {
    _id,
    title,
    description,
    price,
    discountPercentage,
    productImage,
    tags
  }
`);