import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import useAuth from "../hooks/useAuth";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, singOutUser, setUser, setLoader } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return storedTheme ? storedTheme === "dark" : prefersDark;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const onLogout = () => {
    singOutUser()
      .then(() => {
        console.log("user logged out successfully");
        navigate("/login");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav className="w-11/12 mx-auto flex items-center justify-between p-4 dark:bg-gray-900 ">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-gray-800 dark:text-gray-100"
        >
          <img className="h-12 w-12 rounded-full mr-2" src={logo} alt="logo" />
          LearnSkills
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <ul
            className={`lg:flex lg:space-x-6 items-center ${
              isMenuOpen
                ? "block absolute top-16 z-50 left-0 w-full px-4 py-8 bg-gray-100 dark:bg-gray-900 lg:static"
                : "hidden lg:flex"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className="block p-2 hover:text-gray-100 rounded-sm dark:text-gray-100 hover:bg-gray-700"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block p-2 dark:text-gray-100 hover:text-gray-100 rounded-sm hover:bg-gray-700"
              >
                Services
              </NavLink>
            </li>

            {!user ? (
              <li>
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-primary btn-sm"
                >
                  Log-in
                </button>
              </li>
            ) : (
              <li className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="block p-2 hover:text-gray-100 rounded-sm dark:text-gray-100 hover:bg-gray-700"
                >
                  Dashboard
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="absolute z-50 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 w-40 mt-2 rounded shadow-lg">
                    <li>
                      <NavLink
                        to="/addService"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block p-2 hover:bg-gray-700 hover:text-gray-100 rounded-sm"
                      >
                        Add Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/manageService"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block p-2 hover:text-gray-100 hover:bg-gray-700 rounded-sm"
                      >
                        Manage Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/bookedServices"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block p-2 hover:text-gray-100 hover:bg-gray-700 rounded-sm"
                      >
                        Booked-Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/serviceToDo"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block p-2 hover:text-gray-100 hover:bg-gray-700 rounded-sm"
                      >
                        Service-To-Do
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            )}
            {/* Authentication Section */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="py-2 px-1 rounded"
              >
                {darkMode ? (
                  <MdLightMode className="text-xl dark:text-gray-100 text-gray-700" />
                ) : (
                  <MdDarkMode className="text-xl dark:text-gray-100 text-gray-700" />
                )}
              </button>
              {user && (
                <div className="flex items-center space-x-2">
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    title={user?.displayName}
                  />
                  <button onClick={onLogout} className="btn btn-error btn-sm">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl text-gray-700 dark:text-gray-100"
          >
            ☰
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
