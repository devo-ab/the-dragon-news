import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 mt-7">
            <button className="bg-[#D72050] px-6 py-2 text-xl font-medium text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={60}>
                <Link className="text-[#403F3F] text-lg font-semibold mr-10">I can be a React component, multiple React components, or just some text.</Link>

                <Link className="text-[#403F3F] text-lg font-semibold mr-10">I can be a React component, multiple React components, or just some text.</Link>

                <Link className="text-[#403F3F] text-lg font-semibold mr-10">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;