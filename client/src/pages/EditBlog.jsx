import { useParams } from "react-router-dom";
import DashboardLeftPanel from "../components/DashboardLeftPanel";
import EditBlogForm from "../components/EditBlogForm";
import axios from "axios";
import { useEffect, useState } from "react";

const EditBlog = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});
  const getBlogDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/blogs/blog/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success === true) {
        setBlog(res.data.blog);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBlogDetails();
  }, []);
  return (
    <div className="md:min-h-[600px]">
      <div className="pageContent md:flex">
        <DashboardLeftPanel />
        <div className="right">
          <div className="bg-gray-100 shadow-xl px-32 py-8  md:w-[1396px]">
            <h1 className="text-4xl">Edit your blog</h1>
          </div>
          <EditBlogForm
            blogId={params.id}
            title={blog.title}
            description={blog.description}
          />
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
