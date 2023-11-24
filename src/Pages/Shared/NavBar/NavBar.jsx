import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );


  console.log(user)
  return (
    <>
      <div className="navbar bg-black text-white max-w-screen fixed z-50 bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <CiMenuBurger className="text-xl text-cyan-500" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="normal-case font-bold text-center">
            <h1 className="lg:text-3xl pl-4 sm:text-sm font-extrabold">
              <span>
                Ficro<span className="text-cyan-500">Soft</span>
              </span>
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex flex-col items-center px-4">
            <div className="flex-col text-center" onClick={toggleDropdown}>
              {user && (
                <img
                  className="w-10 h-10 avatar rounded-full object-cover cursor-pointer"
                  src={user?.photoURL}
                  alt="User_avatar"
                />
              )}
              <h1 className="sm:text-sm text-white">
                {user && user?.displayName}
              </h1>
              {isDropdownVisible && (
                <button
                  onClick={handleLogOut}
                  className=" bg-cyan-500 text-white px-5 py-2 rounded-lg hover:bg-cyan-600 mt-2"
                >
                  Log Out
                </button>
              )}
            </div>

            {!user ? (
              <Link to="/login">
                <button className="bg-cyan-500 hover:bg-cyan-700 text-lg px-7 md:px-8 lg:px-5 text-center py-2 mt-3 font-medium text-white justify-center items-center cursor-pointer w-full block rounded-md">
                  Login
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
