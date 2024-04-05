import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const LeftCategoryList = ({category}) => {
    const {id, name} = category;
    return (
        <div>
            <NavLink to={`/category/${id}`} className={({isActive}) => isActive ? "bg-[#E7E7E7] rounded-md py-4 px-12 text-[#403F3F] font-semibold" : "text-[#9F9F9F] text-xl px-12 font-medium"}>{name}</NavLink>
        </div>
    );
};

LeftCategoryList.propTypes = {
    category: PropTypes.object.isRequired
}

export default LeftCategoryList;