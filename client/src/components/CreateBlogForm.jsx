import { useState } from "react";
import axios from "axios";

const CreateBlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleCreateBlogSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      for (let index = 0; index < photos.length; index++) {
        formData.append("photos", photos[index]);
      }
      const res = await axios.post(
        "http://localhost:4000/api/v1/blogs/createBlog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success === true) {
        alert("Your blog has been posted successfully!");
      } else {
        alert("There was some error");
      }
      // console.log({ title, description, photos });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      className="flex flex-col md:px-4 md:py-4 gap-4"
      onSubmit={handleCreateBlogSubmit}
    >
      <input
        type="text"
        className="p-4 sm:p-5 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Create a title"
      ></input>
      <textarea
        className="sm:p-5 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        rows="12"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write description"
      ></textarea>
      <label className="block">
        <span className="sr-only">Choose profile photo</span>
        <input
          type="file"
          multiple
          onChange={(e) => setPhotos(e.target.files)}
          className="block w-full text-sm text-gray-500
      file:me-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700
      file:disabled:opacity-50 file:disabled:pointer-events-none
      dark:file:bg-blue-500
      dark:hover:file:bg-blue-400
    "
        />
      </label>
      <button
        type="submit"
        className="w-full py-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateBlogForm;
