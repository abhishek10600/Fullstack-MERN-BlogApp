import DashboardBlogsTableContent from "./DashboardBlogsTableContent";

const DashboardBlogsTable = () => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    S.No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    className="py-3 text-end text-xs font-medium text-gray-500 uppercase flex"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <DashboardBlogsTableContent />
                <DashboardBlogsTableContent />
                <DashboardBlogsTableContent />
                <DashboardBlogsTableContent />
                <DashboardBlogsTableContent />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogsTable;
