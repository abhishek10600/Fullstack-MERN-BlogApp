import BlogPageBlogCard from "../components/BlogPageBlogCard";

const BlogsPage = () => {
  return (
    <div className="md:min-h-[600px]">
      <div className="w-full">
        <div className="md:max-w-[85rem] md:w-full md:mx-auto">
          <h1 className="md:text-4xl md:mx-4 md:my-10">Read the blogs</h1>
          <BlogPageBlogCard />
          <BlogPageBlogCard />
          <BlogPageBlogCard />
          <BlogPageBlogCard />
          <BlogPageBlogCard />
          <BlogPageBlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
