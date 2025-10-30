import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SingupFrom';
import { getData, getUserLogin, setData, setUserLogin } from '../utils/LocalStorage';

const Account = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const interval = setInterval(() => {
      const status = getUserLogin();
      if (status !== isLoggedIn) setIsLoggedIn(status);   //if localStorage is changed explicitly.
    }, 500);
    return ()=> clearInterval(interval);
  }, [isLoggedIn]);

  const handleSignup = (userObj) => {
    // set in localStorage (get data push new data and then set data)
    const tempData = getData();
    // check if already exist or not using .some or .find
    if (!tempData.some((e) => e.email === userObj.email)) {
      tempData.push(userObj);
      setData(tempData);
      setUserLogin(true);
      setIsLoggedIn(true);
    }
    else {
      alert("User Already exist, please login");
    }
  }

  const handleLogin = (email, password) => {
    // Check by getting data from localStorage
    const tempData = getData();
    // If both are correct login
    if (tempData.some((e) => (e.email === email && e.password === password))) {
      alert("login Success");
      setUserLogin(true);
      setIsLoggedIn(true);
    }
    // if password is not correct show err msg
    else if (tempData.some((e) => (e.email === email && e.password !== password))) {
      alert("Wrong password");
    }
    // if email is not correct show err msg
    else if (tempData.some((e) => (e.email !== email && e.password === password))) {
      alert("Wrong email");
    }
    // if user not exist
    else if (!tempData.some((e) => e.email === email)) {
      alert("No User found, Signup ");
    }
  }

  return (
    <div className="flex justify-center items-center my-[2%]">
      {isLoggedIn ? "" :
        isNewUser ? <SignupForm handleSignup={handleSignup} toggleLogin={setIsNewUser} /> : <LoginForm handleLogin={handleLogin} toggleLogin={setIsNewUser} />
      }
    </div>
  )
}

export default Account