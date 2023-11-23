import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const DashboardLeftPanel = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="left bg-gray-100 md:w-[350px] md:min-h-[600px] shadow-xl border-r-2">
      <div className="logo text-center md:my-8">
        <h1 className="md:text-4xl text-blue-500">Dashboard</h1>
      </div>
      <div className="md:flex md:flex-col md:my-24 md:gap-5 md:justify-center md:items-center">
        <div className="relative inline-block">
          <img
            className="inline-block h-[6rem] w-[6rem] rounded-full shadow-2xl"
            src={user.photo.secure_url}
          />
        </div>
        <div className="userName">
          <h1 className="md:text-3xl">{user.name}</h1>
        </div>
        <div className="userName">
          <h1 className="md:text-3xl">{user.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeftPanel;
