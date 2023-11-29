const BlogPageBanner = ({ bannerImage }) => {
  return (
    <div className="bg-red-500 h-[600px]">
      <img
        src={bannerImage}
        className="object-cover h-[600px] w-full"
        alt="..."
      />
    </div>
  );
};

export default BlogPageBanner;
