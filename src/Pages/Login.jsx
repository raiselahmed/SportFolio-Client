import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import hedarRegis from "../assets/images/product/register.png";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "OK",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        showAlert("Error", errorMessage, "error");
      });
  };
  //
  const { googleSignup } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    console.log("gooole");
    googleSignup()
      .then(() => {
        // console.log("Google Sign-In successful");

        showAlert("Success!", "Google Login Successful.", "success");
        navigate("/");
      })
      .catch(() => {
        //  console.log(err)
        showAlert("Error!", "Google Login Failed. Please try again.", "error");
      });
  };

  const handleGitHubLogin = () => {
    showAlert(
      "Coming Soon!",
      "GitHub login functionality is under development.",
      "info"
    );
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
          <h2 className="card-title text-2xl text-center font-bold mb-6 ">
            Log in Info
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm font-medium text-gray-600">
                    EMAIL
                  </span>
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                  <input type="email" name="email" className="grow" required />
                </label>
              </div>

              {/* password */}
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

            {/* Submit Button */}
            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn w-full bg-green-500 hover:bg-green-600 text-white border-none"
              >
                LOGIN
              </button>
            </div>
          </form>

          <div>
            <h1 className="font-semibold my-3">Login With</h1>
            <div className="*:w-full space-y-1">
              <button
                onClick={handleGoogleLogin}
                className="btn w-full bg-blue-500 hover:bg-blue-600 text-white border-none flex items-center gap-2"
              >
                <FaGoogle /> Google
              </button>
              <button
                onClick={handleGitHubLogin}
                className="btn w-full bg-gray-600 hover:bg-gray-700 text-white border-none flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </button>
            </div>
          </div>

          <p className="text-center mt-3">
            Dont’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-red-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
