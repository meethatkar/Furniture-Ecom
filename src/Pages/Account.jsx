import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SingupFrom';
import { getData, getUserLogin, setData, setUserLogin } from '../utils/LocalStorage';
import { useAuth } from '../Context/UserAuth/UserAuth';
import Profile from '../components/MyAccount/Profile';
import { toast, ToastContainer } from 'react-toastify';

const Account = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user, setUser} = useAuth();

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
      setUser(userObj);
      setData(tempData);
      setUserLogin(true, userObj);
      setIsLoggedIn(true);
      toast.success("Welcome Onboard");
    }
    else {
      toast.error("User Already exist, please login");
    }
  }

  const handleLogin = (email, password) => {
    // Check by getting data from localStorage
    const tempData = getData();
    const checkedData = tempData.find((e) => (e.email === email && e.password === password));
    // If both are correct login
    if (checkedData) {
      toast.success("login Success");
      setUser(checkedData);
      setUserLogin(true, checkedData);
      setIsLoggedIn(true);
    }
    // if password is not correct show err msg
    else if (tempData.some((e) => (e.email === email && e.password !== password))) {
      toast.error("Wrong password");
    }
    // if email is not correct show err msg
    else if (tempData.some((e) => (e.email !== email && e.password === password))) {
      toast.error("Wrong email");
    }
    // if user not exist
    else if (!tempData.some((e) => e.email === email)) {
      toast.error("No User found, Signup ");
    }
  }

  return (
    <div className="flex justify-center items-center my-[2%]">
      {isLoggedIn ?  <Profile />:
        isNewUser ? <SignupForm handleSignup={handleSignup} toggleLogin={setIsNewUser} /> : <LoginForm handleLogin={handleLogin} toggleLogin={setIsNewUser} />
      }
    </div>
  )
}

export default Account