import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password)
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    const address = form.get('address');
    const city = form.get('city');
    const state = form.get('state');
    const zip = form.get('zip');

    // create user
    createUser(email, password)
    .then((result) => {
      console.log(result.user)
    })
    .catch((error) => {
      console.log(error.message)
    })
  };

  return (
    <div>
      <Navbar></Navbar>

      <section className="p-6 bg-gray-100 text-gray-900 mt-20">
        <div className="space-y-2 text-center">
          <p className="text-2xl lg:text-4xl text-[#403F3F] font-bold text-center">
            Personal Inormation
          </p>
        </div>
        <form onSubmit={handleRegister} className="container flex flex-col mx-auto space-y-12 mt-8">
          <fieldset className="grid  gap-6 p-6 rounded-md shadow-sm bg-gray-200">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75   border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="photo" className="text-sm">
                  Photo URL
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="text"
                  placeholder="Enter your photo url"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Enter your state"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  ZIP
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  placeholder="Enter your ZIP"
                  className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 justify-center items-center text-center">
            <button
              type="submit"
              className="btn col-span-2 sm:col-span-2 text-xl font-semibold  p-3 text-center rounded-md dark:text-gray-50 bg-[#403F3F] hover:text-black"
            >
              Register
            </button>
            <p className="text-md p-3 rounded-md text-white text-center sm:px-6 col-span-2 sm:col-span-2 bg-[#403F3F]">
              Already have an account?
              <Link to="/login" className="underline text-[#F75B5F] font-semibold">
                LogIn
              </Link>
            </p>
            </div>
          </fieldset>
          {/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Profile</p>
              <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="website" className="text-sm">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/30x30/?random"
                    alt=""
                    className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md dark:border-gray-800"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </fieldset> */}
        </form>
      </section>
    </div>
  );
};

export default Register;
