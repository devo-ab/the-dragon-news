import { useEffect, useState } from "react";
import LeftCategoryList from "../../../components/LeftCategoryList/LeftCategoryList";
import { CiCalendar } from "react-icons/ci";
import img1 from "../../../assets/1.png"


const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-[#403F3F] text-xl font-semibold">All Caterogy</h2>
      <div className="space-y-9 mt-8">
        {categories.map((category) => (
          <LeftCategoryList key={category.id} category={category}></LeftCategoryList>
        ))}
      </div>

      <div className="mt-10">
        <img className="w-full" src={img1} alt="" />
        <h2 className="text-xl font-semibold text-[#403F3F] leading-8 mt-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex gap-8 mt-3">
            <p className="font-medium text-[#403F3F]">Sports</p>
            <p className="font-medium text-[#9F9F9F] flex gap-3 items-center"><CiCalendar /> Jan 4, 2022</p>
        </div>
      </div>
      
      <div className="mt-10">
        <img className="w-full" src={img1} alt="" />
        <h2 className="text-xl font-semibold text-[#403F3F] leading-8 mt-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex gap-8 mt-3">
            <p className="font-medium text-[#403F3F]">Sports</p>
            <p className="font-medium text-[#9F9F9F] flex gap-3 items-center"><CiCalendar /> Jan 4, 2022</p>
        </div>
      </div>

      <div className="mt-10">
        <img className="w-full" src={img1} alt="" />
        <h2 className="text-xl font-semibold text-[#403F3F] leading-8 mt-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex gap-8 mt-3">
            <p className="font-medium text-[#403F3F]">Sports</p>
            <p className="font-medium text-[#9F9F9F] flex gap-3 items-center"><CiCalendar /> Jan 4, 2022</p>
        </div>
      </div>

      <div className="mt-10">
        <img className="w-full" src={img1} alt="" />
        <h2 className="text-xl font-semibold text-[#403F3F] leading-8 mt-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex gap-8 mt-3">
            <p className="font-medium text-[#403F3F]">Sports</p>
            <p className="font-medium text-[#9F9F9F] flex gap-3 items-center"><CiCalendar /> Jan 4, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
