import BlogPageBanner from "../components/BlogPageBanner";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const params = useParams();
  const [blogId, setBlogId] = useState(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogBannerImage, setBlogBannerImage] = useState("");
  const getBlogDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/blogs/blog/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success === true) {
        setBlogId(res.data.blog._id);
        setBlogTitle(res.data.blog.title);
        setBlogDescription(res.data.blog.description);
        setBlogBannerImage(res.data.blog.photos[0].secure_url);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBlogDetails();
  }, []);
  return (
    <div>
      <BlogPageBanner bannerImage={blogBannerImage} />
      <div className="w-full">
        <div className="md:max-w-[85rem] md:w-full md:mx-auto">
          <div className="pageContent flex flex-col gap-[20px] my-16">
            <h1 className="text-4xl">{blogTitle}</h1>
            <p className="text-xl">{blogDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
