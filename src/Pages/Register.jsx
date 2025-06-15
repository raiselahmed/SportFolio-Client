import React, { useContext } from "react";
import { Link } from "react-router";
import hedarRegis from "../assets/images/product/register.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { creatUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURl = form.photoURl.value; // Fixed the typo
    const user = { name, email, password, photoURl }; // Create the user object
    console.log(user); // Log the user object

    // creat Newusr
    creatUser(email, password)
      .then((res) => {
        console.log(res.user);
        const user = res.user;
        setUser(user)
        const createdAt = res?.user?.metadata?.creationTime;
        const newUsers = { name, email, createdAt, photoURl };
        //save users database
        fetch("https://sportfolio-d0367.web.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUsers),
        })
          .then((res) => res.json())
          .then((data) => {
           
            if (data.insertedId) {
              console.log("user created in db", data);
               if (data.insertedId) {
                    Swal.fire({
                      title: "Success!",
                      text: "Users added successfully.",
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
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl rounded-lg overflow-hidden">
        {/* Header Image */}
        <figure>
          <img
            src={hedarRegis}
            alt="Cityscape"
            className="w-full h-48 object-cover object-center"
          />
        </figure>

        <div className="card-body p-8">
          <h2 className="card-title text-2xl font-bold mb-6 ">
            Registration Info
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-medium text-gray-600">
                  NAME
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder=""
                className="input input-bordered w-full"
              />
            </div>

            {/*emaail and password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm font-medium text-gray-600">
                    EMAIL
                  </span>
                </label>
                <label className="input input-bordered flex w-full items-center gap-2">
                  <input type="email" name="email" className="grow" required />
                </label>
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm font-medium text-gray-600">
                    PASSWORD
                  </span>
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                  <input
                    type="password"
                    name="password"
                    className="grow"
                    required
                  />
                </label>
              </div>
            </div>

            {/* Class */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-medium text-gray-600">
                  PHOTO URL
                </span>
              </label>
              <label className="input input-bordered w-full flex items-center gap-2">
                <input type="text" name="photoURl" className="grow" required />
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn w-full bg-green-500 hover:bg-green-600 text-white border-none"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="text-center mt-3">
            Allready Have An Account ?{" "}
            <Link to={"/auth/login"} className="text-red-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
