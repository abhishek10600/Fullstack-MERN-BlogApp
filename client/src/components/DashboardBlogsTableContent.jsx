const DashboardBlogsTableContent = ({ id, title, photos, createdAt }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        <div className="group flex-shrink-0 relative rounded-xl overflow-hidden w-56 sm:w-96 h-44 mx-auto">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 start-0 object-cover rounded-xl"
            src={photos.secure_url}
            alt="..."
          />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {createdAt}
      </td>
      <td className="py-4 whitespace-nowrap text-end text-sm font-medium flex gap-4 items-center md:h-[160px]">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          Edit
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DashboardBlogsTableContent;
