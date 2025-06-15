import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
const {user} = useContext(AuthContext);

  const handleAddEquipment = (e) => {
    e.preventDefault();

    const form = e.target; // Access the form element
    const image = form.image?.value || ""; // Safely access form elements
    const name = form.name?.value || "";
    const category = form.category?.value || "";
    const description = form.description?.value || "";
    const price = form.price?.value || 0;
    const rating = form.rating?.value || 0;
    const processingTime = form.processingTime?.value || "";
    const stockStatus = form.stockStatus?.value || "";
    const email = user.email
    const newEquipment = {
      image,
      name,
      category,
      description,
      price,
      rating,
      processingTime,
      stockStatus,
      email
    };

    console.log(newEquipment);

    //sent data to server and mongdb
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

          if (data.insertedId) {
                      console.log("user created in db", data);
                       if (data.insertedId) {
                            Swal.fire({
                              title: "Success!",
                              text: "Product added successfully.",
                              icon: "success", // Correct icon for success
                              confirmButtonText: "Cool",
                            });
                            form.reset(); // Clear the form after successful submission
                          } else {
                            Swal.fire({
                              title: "Failed!",
                              text: "User not add coffee. Please try again.",
                              icon: "error", // Error icon for failure
                              confirmButtonText: "Retry",
                            });
                          }
                    }
      });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
            {/* Heading */}
            <div className="mt-5 mb-8">
              <p className="text-center text-3xl font-semibold">
                <span className="mr-3 text-[#FF497C]">
                  <i className="bx bxs-alarm-add"></i>
                </span>
                <span className="dark:text-white">
                  <span className="text-[#FF497C]"></span>
                  Your Product
                </span>
              </p>
            </div>
            {/* form */}
            {/* Form */}
            <form onSubmit={handleAddEquipment}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image */}
                <div>
                  <label className="block mb-2 dark:text-white" htmlFor="image">
                    Image URL
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Enter Image URL"
                    required
                  />
                </div>
                {/* Item Name */}
                <div>
                  <label className="block mb-2 dark:text-white" htmlFor="name">
                    Item Name
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Item Name"
                    required
                  />
                </div>
                {/* Category */}
                <div>
                  <label
                    className="block mb-2 dark:text-white"
                    htmlFor="category"
                  >
                    Category Name
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Enter Category Name"
                    required
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block mb-2 dark:text-white" htmlFor="price">
                    Price
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Enter Price"
                    required
                  />
                </div>
                {/* Rating */}
                <div>
                  <label
                    className="block mb-2 dark:text-white"
                    htmlFor="rating"
                  >
                    Rating
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    type="number"
                    id="rating"
                    name="rating"
                    placeholder="Enter Rating (1-5)"
                    min="1"
                    max="5"
                    step="0.1"
                    required
                  />
                </div>

                {/* Stock Status */}
                <div>
                  <label
                    className="block mb-2 dark:text-white"
                    htmlFor="stockStatus"
                  >
                    Stock Status
                  </label>
                  <select
                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                    id="stockStatus"
                    name="stockStatus"
                    required
                  >
                    <option className="bg-base-100" value="In Stock">
                      In Stock
                    </option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
              </div>
              {/* Description */}
              <div>
                <label
                  className="block mb-2 dark:text-white"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  id="description"
                  name="description"
                  placeholder="Enter Description"
                  rows="4"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 w-full bg-[#FF497C] text-white font-semibold rounded hover:bg-[#ab3154] transition"
                >
                  Add Equipment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddEquipment;
