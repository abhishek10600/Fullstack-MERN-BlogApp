import DashboardLeftPanel from "../components/DashboardLeftPanel";

const CreateBlog = () => {
  return (
    <div className="md:min-h-[600px]">
      <div className="pageContent md:flex">
        <DashboardLeftPanel />
        <div className="right">
          <div className="bg-gray-100 shadow-xl px-32 py-8  md:w-[1396px]">
            <h1 className="text-4xl">Create your blog</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
