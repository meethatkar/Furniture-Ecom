import React, { useState } from "react";

const SignupForm = ({handleSignup, toggleLogin}) => {

  const [newUser, setnewUser] = useState({
    name: String,
    email: String,
    password: String,
    mobileNum: Number,
    age: Number,
    gender: String,
    address: String
  })

  const manageSubmit = (e)=>{
    e.preventDefault();
    const formEntries = new FormData(e.target);
    const data = Object.fromEntries(formEntries.entries()); 
    handleSignup(data);
  }

  return (
    <div className="flex justify-center items-center w-1/2">
      <form className="bg-white shadow-md rounded-xl px-10 py-8 w-full max-w-full" onSubmit={manageSubmit}>
        <h2 className="text-yellow-600 text-3xl font-semibold border-b-4 border-yellow-600 pb-2 text-center mb-8">
          Sign-Up Form
        </h2>

        <div className="grid grid-cols-2 gap-[5%]">
          <div className="mb-5">
          <label htmlFor="name" className="block text-xl font-medium mb-2">Name</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-xl focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-xl font-medium mb-2">Email</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-xl focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-xl font-medium mb-2">Password</label>
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-xl focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="mobile" className="block text-xl font-medium mb-2">Mobile Number</label>
          <input
            required
            id="mobile"
            name="mobileNum"
            type="number"
            minLength={10}
            maxLength={10}
            placeholder="Enter your mobile number"
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-xl focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="age" className="block text-xl font-medium mb-2">Age</label>
          <input
            required
            id="age"
            name="age"
            type="number"
            placeholder="Enter your age"
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-xl focus:outline-none focus:border-yellow-600"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="gender" className="block text-xl font-medium mb-2">Gender</label>
          <select
            required
            id="gender"
            name="gender"
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-xl focus:outline-none focus:border-yellow-600 bg-transparent"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        </div>

        <div className="mb-5 mt-[5%]">
          <label htmlFor="address" className="block text-xl font-medium mb-2">Address</label>
          <textarea
            required
            id="address"
            name="address"
            placeholder="Enter your address"
            rows={2}
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-xl focus:outline-none focus:border-yellow-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white text-xl font-semibold py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          Sign Up
        </button>
        <p className="text-gray-400 text-xl my-[1%]"> Already Have an account ? <button onClick={()=>{toggleLogin(false)}} className="text-yellow-600 underline"> Click Here </button></p>
      </form>
    </div>
  );
};

export default SignupForm;
