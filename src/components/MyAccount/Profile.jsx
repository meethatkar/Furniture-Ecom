import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { IoTrashBin } from "react-icons/io5";
import { getUserLogin } from "../../utils/LocalStorage"


const Profile = () => {
  const user = getUserLogin();

  const userImg =
    user.gender === "Male"
      ? "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png"
      : "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png";

  return (
    <div className="flex flex-col items-center justify-center w-full my-[2%] px-[5vw]">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 w-[95%] sm:w-[90%] md:max-w-4xl mx-auto mt-6 border border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600 border-b-4 border-yellow-600 pb-2 mb-6 sm:mb-8 w-fit mx-auto md:mx-0 text-center md:text-left">
          User Profile
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10">
          {/* User Avatar */}
          <div className="flex flex-col items-center text-center w-full sm:w-auto">
            <img
              src={userImg}
              alt="User"
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-yellow-500 shadow-md"
            />
            <p className="mt-4 text-lg sm:text-xl font-semibold text-gray-700">{user.name}</p>
            <p className="text-sm sm:text-base text-gray-500 break-all">{user.email}</p>
          </div>

          {/* User Info */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-base sm:text-lg w-full">
            <div>
              <p className="font-semibold text-gray-600">Age</p>
              <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md">{user.age}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Gender</p>
              <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md">{user.gender}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Mobile</p>
              <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md break-all">{user.mobileNum}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Address</p>
              <p className="mt-1 px-4 py-2 bg-gray-100 rounded-md">{user.address}</p>
            </div>

            <button className="sm:col-span-2 mt-2 sm:mt-4 flex items-center justify-center gap-2 hover:scale-101 transition-all ease px-4 py-2 rounded-md bg-gradient-to-r from-red-600 via-red-500 to-red-400 font-medium text-white">
              Delete <IoTrashBin />
            </button>
          </div>
        </div>
      </div>



      {/* Empty order history section */}
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl mt-8 text-center ">
        <h2 className="text-2xl font-semibold text-yellow-600 border-b-4 border-yellow-600 pb-2">
          Order History
        </h2>
        <p className="text-gray-500 mt-4">No orders yet.</p>
      </div>
    </div>
  );
};

export default Profile;
