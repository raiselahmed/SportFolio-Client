import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AQPMNTbnr from "./AQPMNTbnr";
import AlequipCard from "./AlequipCard";

const AllEquipmnt = () => {
  const allProducts = useLoaderData();
  const [product, setProduct] = useState(allProducts);

  return (
    <div>
      <section>
        <AQPMNTbnr />
      </section>

      <section className="pb-12 -mt-13">
        <div className="container mx-auto px-4 bg-ba">
          {/* Content goes here */}
            <div className="grid grid-cols-1 mdc:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    product.map((itemn ,index)=> <AlequipCard key={index} itemn={itemn}></AlequipCard>)
                }
            </div>
        </div>
      </section>
    </div>
  );
};

export default AllEquipmnt;
