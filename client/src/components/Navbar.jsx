import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { isLoggedIn, user } = useContext(UserContext);
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none md:text-3xl text-2xl font-semibold dark:text-white"
            to="/"
          >
            The<span className="text-blue-500">B</span>log.
            <span className="text-blue-500">.</span>.
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              className="md:text-xl font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="md:text-xl font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/blogs"
            >
              Blogs
            </Link>
            {isLoggedIn && (
              <Link
                className="md:text-xl font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/login"
              >
                Dashboard
              </Link>
            )}
            {isLoggedIn && (
              <div className="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-basic"
                  type="button"
                  className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <img
                    className="inline-block h-[2.875rem] w-[2.875rem] rounded-full"
                    src={user.photo.secure_url}
                    alt="Image Description"
                  ></img>
                  <svg
                    className="hs-dropdown-open:rotate-180 w-4 h-4 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                  aria-labelledby="hs-dropdown-basic"
                >
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                    href="#"
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
            {!isLoggedIn && (
              <Link
                className="md:text-xl font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/login"
              >
                Login
              </Link>
            )}
            {!isLoggedIn && (
              <Link
                className="md:text-xl font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/signup"
              >
                Signup
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
