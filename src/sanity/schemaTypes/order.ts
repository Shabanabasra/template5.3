import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  type: "document",
  title: "Orders",
  fields: [
    defineField({ name: "firstName", title: "First Name", type: "string" }),
    defineField({ name: "lastName", title: "Last Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "zipCode", title: "Zip Code", type: "string" }),
    defineField({ name: "discount", title: "Discount", type: "number" }),
    defineField({
      name: "items",
      title: "Ordered Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "orderItem",
          fields: [
            { name: "name", title: "Product Name", type: "string" },
            { name: "imageUrl", title: "Product Image", type: "url" },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
          ],
        },
      ],
    }),
    defineField({ name: "totalAmount", title: "Total Amount", type: "number" }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Success", value: "success" },
          { title: "Dispatch", value: "dispatch" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    }),
  ],
});