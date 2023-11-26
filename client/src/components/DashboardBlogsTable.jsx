import { useEffect, useState } from "react";
import DashboardBlogsTableContent from "./DashboardBlogsTableContent";
import axios from "axios";

const DashboardBlogsTable = () => {
  const [blogs, setBlogs] = useState([]);
  const getLoggedInUserBlogs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/blogs/myBlogs",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success === true) {
        setBlogs(res.data.blogs);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getLoggedInUserBlogs();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-end text-xs font-medium text-gray-500 uppercase flex"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog) => (
                  <DashboardBlogsTableContent
                    key={blog._id}
                    id={blog._id}
                    title={blog.title}
                    photos={blog.photos[0]}
                    createdAt={blog.createdAt}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogsTable;
