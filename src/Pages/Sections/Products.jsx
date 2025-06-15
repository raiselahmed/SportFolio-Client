import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SpotlightCard from "../../../Reactbits/SpotlightCard/SpotlightCard";

const Products = () => {
  const loaddata = useLoaderData();
  console.log(loaddata);
  const [products, setProducts] = useState(loaddata);

  // const products = [
  //   {
  //     id: 1,
  //     name: "Soccer Ball",
  //     price: "$25",
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 2,
  //     name: "Tennis Racket",
  //     price: "$80",
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 3,
  //     name: "Running Shoes",
  //     price: "$120",
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 4,
  //     name: "Boxing Gloves",
  //     price: "$45",
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 5,
  //     name: "Basketball",
  //     price: "$30",
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 6,
  //     name: "Yoga Mat",
  //     price: "$20",
  //     image: "https://via.placeholder.com/150",
  //   },
  // ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.slice(0, 6).map((product) => (
              <SpotlightCard
                className=" !border-0 !p-0 !bg-none !bg-transparent"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  key={product.id} // Unique key for each product for React's reconciliation
                  className="rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
                >
                  {/* Product image with a fallback placeholder in case the URL is invalid */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  {/* <h2>{product._id}</h2> */}
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <Link to={`viweDetails/${product._id}`}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300">
                      View Product
                    </button>
                  </Link>
                </div>
              </SpotlightCard>
              //
            ))
          ) : (
            // Message displayed if no products are available
            <p className="text-center text-gray-500 col-span-full">
              No products available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
