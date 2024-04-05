import { Link, NavLink } from "react-router-dom";
import userLogo from "../../../assets/user.png";

const Navbar = () => {
  const navLinks = (
    <div className="lg:space-x-5 space-y-2 md:space-y-0 flex flex-col lg:flex-row items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#706F6F] text-lg font-medium border border-[#706F6F] rounded-md px-3 py-1 text-center"
            : "text-[#131313CC] text-center text-lg"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#706F6F] text-lg font-medium border border-[#706F6F] rounded-md px-3 py-1 text-center"
            : "text-[#131313CC] text-center text-lg"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/career"
        className={({ isActive }) =>
          isActive
            ? "text-[#706F6F] text-lg font-medium border border-[#706F6F] rounded-md px-3 py-1 text-center"
            : "text-[#131313CC] text-center text-lg"
        }
      >
        Career
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userLogo} />
        </div>
      </div>
      {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul> */}
    </div>

        <Link to="/login">
          <button className="bg-[#403F3F] px-8 text-white hover:text-black text-xl font-semibold btn">
            LogIn
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
