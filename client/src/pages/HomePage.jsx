import HomeBanner from "../components/HomeBanner";
import HomePageBlogCard from "../components/HomePageBlogCard";
import HomePageBlogContainer from "../components/HomePageBlogContainer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="md:min-h-[500px]">
      <HomeBanner />
      <div className="w-full">
        <div className="md:max-w-[85rem] md:w-full md:mx-auto">
          <HomePageBlogContainer />
          <HomePageBlogCard />
          <HomePageBlogCard />
          <HomePageBlogCard />
          <HomePageBlogCard />
          <HomePageBlogCard />
          <div className="my-10 flex justify-center">
            <Link to="/blogs" className="md:text-2xl">
              More Blogs...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
