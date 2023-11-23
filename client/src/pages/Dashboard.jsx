import DashboardBlogsTable from "../components/DashboardBlogsTable";
import DashboardLeftPanel from "../components/DashboardLeftPanel";

const Dashboard = () => {
  return (
    <div className="md:min-h-[600px]">
      <div className="pageContent md:flex">
        <DashboardLeftPanel />
        <div className="right">
          <div className="TopPanel md:flex md:justify-between  bg-gray-100 shadow-xl px-32 py-8  md:w-[1380px]">
            <h1 className="text-4xl">Your blogs</h1>
            <button
              type="button"
              className="mx-28 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Create
            </button>
          </div>
          <div className="px-4 my-4">
            <DashboardBlogsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
