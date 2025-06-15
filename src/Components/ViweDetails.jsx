import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { TbArrowBack } from "react-icons/tb";
const ViweDetails = () => {
  const viweData = useLoaderData();
  const { image, name, category, description, price, rating, stockStatus } =
    viweData;
  const navigate = useNavigate()

  const goBack =()=>{
    navigate(-1);
  }


    
  return (
    <div className="my-12">
      <div className="hero container mx-auto px-4">
        <div className="hero-content flex-col lg:flex-row lg:items-stretch">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="pt-3">Cetagory : {category}</p>
            <div className="divider"></div>
            <strong>{}</strong>
            <div className="divider"></div>

            <strong>
              description: <p className="font-light">{description}</p>
            </strong>

            <div className="divider"></div>

            <div className="space-x-4">
              <p>
                Price : <strong className="ms-4">{price}$</strong>
              </p>
              <p>
                Rating: <strong className="ms-4">{rating}</strong>
              </p>
              <p>
                stockStatus:
                <strong className="ms-4">{stockStatus}</strong>
              </p>
            </div>

            <div className="flex my-3">
              <button className="btn btn-outline btn-secondary ms-6">
                Wishlist
              </button>
           <button onClick={goBack} className="btn btn-outline btn-secondary ms-6"><TbArrowBack /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViweDetails;
