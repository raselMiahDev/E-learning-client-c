import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { getToken, removeSession } from "../../utility/SessionHelper";
import logo from "./../../assets/Frame.svg";
import DropDownMenu from "../account/DropDownMenu";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Courses",
    href: "/all-courses",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    removeSession();
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="relative w-full h-auto bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-20 md:px-20 lg:px-20 xl:px-0 2xl:px-0 py-2">
          <div className="inline-flex items-center space-x-2">
            <Link to="/">
              <img
                className="md:w-[30px] md:h-[50px] w-[28px] h-[40px]"
                src={logo}
                alt="logo"
              />
            </Link>
            <Link to="/">
              <span className="font-bold">Edujar</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-400"
                        : "text-gray-800 hover:text-green-500"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="flex md:gap-5 gap-2 items-center">
              {getToken() ? (
                <>
                  <DropDownMenu />
                  <span
                    onClick={handleLogout}
                    className="text-gray-800 hover:text-green-500 cursor-pointer"
                  >
                    Logout
                  </span>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-700"
                        : " text-gray-800 hover:text-green-500"
                    }
                  >
                    Login
                  </NavLink>
                  <div>
                    <NavLink to="/registration">
                      <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        Sign Up
                      </button>
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="lg:hidden">
            <RiMenu2Fill
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer"
              size={25}
            />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <Link to="/">
                        <img
                          className="md:w-[30px] md:h-[50px] w-[28px] h-[40px]"
                          src={logo}
                          alt="logo"
                        />
                        <p className="font-bold">Edujar</p>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <RiCloseFill className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            isActive
                              ? "text-green-700"
                              : "text-base font-medium text-gray-900"
                          }
                        >
                          <span className="">{item.name}</span>
                        </NavLink>
                      ))}
                      <div className="flex md:gap-5 gap-2 items-center">
                        {getToken() ? (
                          <>
                            <NavLink
                              to="/my-courses"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-green-700"
                                  : " text-gray-800 hover:text-green-500"
                              }
                            >
                              My Course
                            </NavLink>
                            <NavLink
                              to="/profile"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-green-700"
                                  : " text-gray-800 hover:text-green-500"
                              }
                            >
                              <CgProfile size={25} />
                            </NavLink>
                            <span
                              onClick={handleLogout}
                              className="text-gray-800 hover:text-green-500 cursor-pointer"
                            >
                              Logout
                            </span>
                          </>
                        ) : (
                          <>
                            <NavLink
                              to="/login"
                              className=" font-bold text-gray-800 hover:text-green-500"
                            >
                              Login
                            </NavLink>
                            <div>
                              <NavLink to="/registration">
                                <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                                  Sign Up
                                </button>
                              </NavLink>
                            </div>
                          </>
                        )}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
