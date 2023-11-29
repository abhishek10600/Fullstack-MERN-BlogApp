import HomeBanner from "../components/HomeBanner";
import HomePageBlogCard from "../components/HomePageBlogCard";
import HomePageBlogContainer from "../components/HomePageBlogContainer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const getLatestBlogs = async () => {
    const res = await axios.get(
      "http://localhost:4000/api/v1/blogs/all?limit=4",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data.success === true) {
      setBlogs(res.data.blogs);
    }
  };
  useEffect(() => {
    getLatestBlogs();
  }, []);
  return (
    <div className="md:min-h-[500px]">
      <HomeBanner />
      <div className="w-full">
        <div className="md:max-w-[85rem] md:w-full md:mx-auto">
          <HomePageBlogContainer />
          <div className="flex flex-col items-center md:block">
            {blogs?.map((blog) => (
              <Link to={`/blog/${blog._id}`} key={blog._id}>
                <HomePageBlogCard
                  id={blog._id}
                  title={blog.title}
                  description={blog.description}
                  createdAt={blog.createdAt}
                  image={blog.photos[0].secure_url}
                />
              </Link>
            ))}
          </div>
          <div className="my-10 flex justify-center">
            <Link to="/blogs" className="md:text-2xl">
              More Blogs...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
