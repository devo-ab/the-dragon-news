import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const newsCard = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>

        {/* news container start */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-[#403F3F]">Dragon News Home</h2>

          <div>
            {
              newsCard.map(news => <NewsCard key={news.category_id} news={news}></NewsCard>)
            }
          </div>
        </div>
        {/* news container end */}

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
