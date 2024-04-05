import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import swimming from "../../../assets/qZone1.png"
import childClass from "../../../assets/qZone2.png"
import playGround from "../../../assets/qZone3.png"
import backgroundImage from "../../../assets/bg.png"

const RightSideNav = () => {
  return (
    <div>
      {/* LogIn With start */}
      <div>
        <h2 className="text-xl font-semibold text-[#403F3F]">LogIn With</h2>
        <div className="space-y-2 mt-5">
          <button className="w-full btn-ghost border border-[#58A7DE] text-[#58A7DE] font-semibold rounded py-1 flex items-center gap-2 justify-center">
            <FaGoogle />
            LogIn with Google
          </button>

          <button className="w-full btn-ghost border border-black text-black font-semibold rounded py-1 flex items-center gap-2 justify-center">
            <FaGithub />
            LogIn with Github
          </button>
        </div>
      </div>
      {/* LogIn With end */}

      {/* find us start */}
      <div className="mt-7">
        <h2 className="text-xl font-semibold text-[#403F3F]">Find Us</h2>
        <div className="border border-[#E7E7E7] rounded-md mt-5">
          <div className="p-4 border-b border-[#E7E7E7]">
            <p className="flex gap-2 items-center">
              <span className="p-2 text-[#3B599C] rounded-full bg-[#F3F3F3]">
                <FaFacebookF />
              </span>{" "}
              <span className="text-[#706F6F] font-medium">Facebook</span>
            </p>
          </div>
          <div className="p-4 border-b text-[#58A7DE] border-[#E7E7E7]">
            <p className="flex gap-2 items-center">
              <span className="p-2 rounded-full bg-[#F3F3F3]">
              <FaTwitter />
              </span>{" "}
              <span className="text-[#706F6F] font-medium">Twitter</span>
            </p>
          </div>
          <div className="p-4">
            <p className="flex gap-2 items-center">
              <span className="p-2 text-[#D82D7E] rounded-full bg-[#F3F3F3] ">
              <FaInstagram />
              </span>{" "}
              <span className="text-[#706F6F] font-medium">Instagram</span>
            </p>
          </div>
        </div>
      </div>
      {/* find us end */}

      {/* Q-zone start */}
      <div className="bg-[#F3F3F3] mt-5">
        <h2 className="text-[#403F3F] text-xl font-semibold p-4">Q-Zone</h2>
        <div className="mt-3 px-2 pb-2">
          <img className="w-full border-2 border-dashed border-[#E7E7E7]" src={swimming} alt="" />
          <img className="w-full border-2 border-dashed border-[#E7E7E7] mt-6" src={childClass} alt="" />
          <img className="w-full border-2 border-dashed border-[#E7E7E7] mt-6" src={playGround} alt="" />
        </div>
      </div>
      {/* Q-zone end */}

      {/* ads start */}
      <div className="bg-adsBackground px-9 py-[74px] mt-7 text-center">
        <h2 className="text-white text-3xl font-bold leading-10">Create an Amazing Newspaper</h2>

        <p className="text-xl leading-7 text-white mt-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

        <button className="mt-7 btn-ghost text-white text-xl font-semibold py-6 bg-[#D72050] px-8">Learn More</button>
      </div>
      {/* ads end */}
    </div>
  );
};

export default RightSideNav;
