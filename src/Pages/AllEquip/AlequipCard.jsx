import React from "react";
import SpotlightCard from "../../../Reactbits/SpotlightCard/SpotlightCard";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router";
const AlequipCard = ({ itemn }) => {
  const { image, name, price, rating, category, _id } = itemn;
  return (
    <SpotlightCard
      className=" !border-0 !p-0 !bg-none !bg-transparent"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <div className="card card-side p-2 text-black    items-center bg-white shadow-xl rounded-2xl">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body  justify-center">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <div className="flex items-center justify-between mb-6">
            <span className="text-4xl font-semibold text-gray-900">
              $1{price}
            </span>
            <div className="flex items-center text-gray-700">
              <span className="text-3xl font-medium mr-1">{rating}</span>
              <FaStar className="text-yellow-400 w-8 h-8" fill="currentColor" />
            </div>
          </div>

          <div className="card-actions justify-end">
            <Link to={`viweDetails/${_id}`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300">
                View Product
              </button>
            </Link>
            <button className="btn btn-primary">
              Add To Cart
              <FaShoppingCart className="w-8 h-8" />{" "}
              {/* Changed icon to ShoppingCart */}
            </button>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default AlequipCard;
