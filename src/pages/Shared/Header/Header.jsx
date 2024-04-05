import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='text-center mt-5'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-[#706F6F] text-lg mt-2'>Journalism Without Fear or Favour</p>
            <div className='flex gap-1 justify-center'>
                <p className='text-[#403F3F] text-xl font-medium'>{moment().format("dddd, ")}</p>
                <p className='text-[#706F6F] text-xl font-medium'>{moment().format(" MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;