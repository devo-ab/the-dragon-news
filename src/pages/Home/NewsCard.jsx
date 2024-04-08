import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {

    const {title, author, image_url, details, rating, total_view, _id} = news;

  return (
    <div className="mt-9 border border-[#E7E7E7] rounded-md">
      <div className="flex items-center justify-between bg-[#F3F3F3] px-5 py-4">
        <div className="flex gap-3 items-center">
          <div className="w-10 rounded-full">
            <img className="rounded-full" src={author.img} alt="" />
          </div>
          <div>
            <p className="text-[#403F3F] font-semibold">{author.name}</p>
            <p className="text-[#706F6F] ">{author.published_date}</p>
          </div>
        </div>
        <div>
          <p className="flex gap-3 text-[#706F6F] text-xl">
            <FaRegBookmark /> <MdOutlineShare />
          </p>
        </div>
      </div>

      <div className="px-5">
        <h1 className="text-[#403F3F] text-xl font-bold leading-8 mt-3">{title}</h1>

        <img className="w-full mt-4" src={image_url} alt="" />

        <div className="text-[#706F6F] leading-6 font-medium mt-6">
        {
        details.length > 220
         ? <p>{details.slice(0, 220)} <Link to={`/news/${_id}`} className="font-semibold text-[#FF8C47]"><button >Read More</button> </Link></p>
           : <p>{details}<Link className="font-semibold text-[#FF8C47] ml-2"><button >Read More</button> </Link></p>}
        </div>
        
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
          <p className="text-[#706F6F] text-lg font-medium leading-6">{rating.number}</p>
        </div>
        <p className="text-[#706F6F] text-lg font-medium leading-6 flex gap-2 items-center">
          <MdRemoveRedEye /> {total_view}
        </p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
    news : PropTypes.object.isRequired
};

export default NewsCard;
