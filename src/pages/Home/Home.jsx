import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import user from "../../assets/user.png";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import image1 from "../../assets/editorsInsight1.png";
import { MdRemoveRedEye } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-[#403F3F]">Dragon News Home</h2>

          <div className="mt-9 border border-[#E7E7E7] rounded-md">
            <div className="flex items-center justify-between bg-[#F3F3F3] px-5 py-4">
              <div className="flex gap-3 items-center">
                <div className="w-10 rounded-full">
                  <img src={user} alt="" />
                </div>
                <div>
                  <p className="text-[#403F3F] font-semibold">Awlad Hossain</p>
                  <p className="text-[#706F6F] ">2022-08-21</p>
                </div>
              </div>
              <div>
                <p className="flex gap-3 text-[#706F6F] text-xl">
                  <FaRegBookmark /> <MdOutlineShare />
                </p>
              </div>
            </div>

            <div className="px-5">
              <h1 className="text-[#403F3F] text-xl font-bold leading-8 mt-3">
                Biden Pledges Nearly $3 Billion To Ukraine In <br /> Largest U.S. Military Aid
                Package Yet
              </h1>

              <img className="w-full mt-4" src={image1} alt="" />

              <p className="text-[#706F6F] leading-6 font-medium mt-6">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden,
                Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy
                News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S.
                military a...
              </p>
              <button className="font-semibold text-[#FF8C47]">Read More</button>
              <p className="border-b pb-2 border-[#E7E7E7]"></p>
            </div>

            <div className="px-5 mt-2 flex justify-between pb-4">
              <div className="flex gap-2">
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
                <p className="text-[#706F6F] text-lg font-medium leading-6">4.9</p>
              </div>
              <p className="text-[#706F6F] text-lg font-medium leading-6 flex gap-2 items-center">
                <MdRemoveRedEye /> 499
              </p>
            </div>
          </div>
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
