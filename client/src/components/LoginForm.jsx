import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="form-container md:w-full md:my-20">
      <form className="flex flex-col md:gap-8 md:my-5">
        <input
          type="email"
          className="p-4 sm:p-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:focus:ring-gray-600"
          placeholder="Enter your email"
        />
        <input
          type="password"
          className="p-4 sm:p-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:focus:ring-gray-600"
          placeholder="Create a password"
        />
        <button
          type="button"
          className="w-full py-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Login
        </button>
      </form>
      <Link to="/signup" className="text-center block md:text-xl">
        Do not have an account? Create an account.
      </Link>
    </div>
  );
};

export default LoginForm;
