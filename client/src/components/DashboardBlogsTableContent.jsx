import { Link } from "react-router-dom";
import axios from "axios";

const DashboardBlogsTableContent = ({
  id,
  title,
  photos,
  createdAt,
  setRefresh,
}) => {
  const deleteBlogButtonClicked = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/v1/blogs/deleteBlog/${id}`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success === true) {
        alert("blog deleted successfully.");
        setRefresh((prev) => !prev);
      } else {
        alert("There was some error.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        <div className="group flex-shrink-0 relative rounded-xl overflow-hidden w-56 sm:w-96 h-44 mx-auto">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
            src={photos.secure_url}
            alt="..."
          />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {createdAt}
      </td>
      <td className="py-4 whitespace-nowrap text-end text-sm font-medium flex gap-4 items-center md:h-[160px]">
        <Link
          type="button"
          to={`/dashboard/editblog/${id}`}
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          Edit
        </Link>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => deleteBlogButtonClicked(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DashboardBlogsTableContent;
