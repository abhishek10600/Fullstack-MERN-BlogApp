const BlogPageBlogCard = () => {
  return (
    <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] md:h-[200px] overflow-hidden md:my-20 md:mx-0 mx-4 my-4">
      <div className="flex-shrink-0 relative w-full rounded-t-xl  overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
        <img
          className="w-full h-full absolute top-0 start-0 object-cover"
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image Description"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="mt-5 sm:mt-auto">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Last updated 5 mins ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageBlogCard;
