import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import userIcn from "../../assets/images/user.png";
import Swal from "sweetalert2";
const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
    const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "OK",
    });
  };

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log("logOut");
         showAlert("Success!", "Google Login Successful.", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error("Error during logout:", err);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allEquip"}>All Sports Equipmenet</NavLink>
      </li>
      <li>
        <NavLink to={"/produnt/add"}>Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to={"/myEquip"}>My Equipment</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
       
       {user && user?.email ? (
            <a className="btn btn-ghost text-xl">{user?.email}</a>
        ) : (
          <a className="btn btn-ghost text-xl">daisyUI</a> 
      
        )}


      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <Link to={"/auth/login"}>
          <button className="btn">Login</button>
        </Link> */}
        <div className="usr me-2">
          {user && user?.email ? (
            <div>
              <img
                className="w-9 h-9 object-cover rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            <img className="w-9 rounded-4xl" src={userIcn} alt="" />
          )}
        </div>
        {user && user?.email ? (
          <Link>
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </Link>
        ) : (
          <Link to={"/auth/login"}>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
