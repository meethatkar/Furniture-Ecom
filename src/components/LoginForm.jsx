import React, { useState } from 'react'

const LoginForm = ({handleLogin, toggleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <form className="bg-white shadow-md rounded-xl px-10 py-8 w-10/12 md:w-full max-w-md" onSubmit={(e)=>{e.preventDefault(); handleLogin(email, password)}}>
        <h2 className="text-yellow-600 text-xl md:text-3xl font-semibold md:border-b-4 border-b-3 border-yellow-600 md:pb-2 pb-0.5 text-center mb-8">
          Login Form
        </h2>

        <div className="mb-6">
          <label htmlFor='email' className="block text-base md:text-xl font-medium mb-2">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-base md:text-xl focus:outline-none focus:border-yellow-600"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        <div className="mb-6">
          <label htmlFor='password' className="block text-base md:text-xl font-medium mb-2">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border-b-2 border-gray-400 px-4 pt-2 mb-[2%] text-base md:text-xl focus:outline-none focus:border-yellow-600"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white text-base md:text-xl font-semibold py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          Login
        </button>
        <p className='my-[2%] text-base md:text-lg text-gray-400'> New User ? <button className='text-yellow-600 underline' onClick={()=>{toggleLogin(true)}}> Sign-Up </button></p>
      </form>
  )
}

export default LoginForm