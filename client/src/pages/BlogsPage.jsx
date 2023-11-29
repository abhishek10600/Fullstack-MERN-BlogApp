import { useEffect, useState } from "react";
import BlogPageBlogCard from "../components/BlogPageBlogCard";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    const res = await axios.get("http://localhost:4000/api/v1/blogs/all", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.success === true) {
      setBlogs(res.data.blogs);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div className="md:min-h-[600px]">
      <div className="w-full">
        <div className="md:max-w-[85rem] md:w-full md:mx-auto">
          <h1 className="md:text-4xl md:mx-4 md:my-10">Read the blogs</h1>
          {blogs.map((blog) => (
            <Link to={`/blog/${blog._id}`} key={blog._id}>
              <BlogPageBlogCard
                id={blog._id}
                title={blog.title}
                description={blog.description}
                createdAt={blog.createdAt}
                image={blog.photos[0].secure_url}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
