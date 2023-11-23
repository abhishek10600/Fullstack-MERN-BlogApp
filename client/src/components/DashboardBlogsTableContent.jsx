import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const DashboardBlogsTableContent = () => {
  const { user } = useContext(UserContext);
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
        Joe Black
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">31</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        <img className="w-56 h-auto" src={user.photo.secure_url} alt="..." />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        New York No. 1 Lake Park
      </td>
      <td className="py-4 whitespace-nowrap text-end text-sm font-medium flex gap-4 items-center md:h-[160px]">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          Edit
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DashboardBlogsTableContent;
