import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SingupFrom';
import { getData, getUserLogin, setData, setUserLogin } from '../utils/LocalStorage';
import { useAuth } from '../Context/UserAuth/UserAuth';
import Profile from '../components/MyAccount/Profile';

const Account = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user, setUser} = useAuth();

  // USER ACCOUNT CODE
  const maleIconArr = [
    'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png',
    'https://static.vecteezy.com/system/resources/previews/024/183/525/large_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg',
    'https://static.vecteezy.com/system/resources/previews/024/183/502/large_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg',
    'https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png',
  ]

  const femaleIconArr = [
    'https://static.vecteezy.com/system/resources/previews/052/755/997/large_2x/a-woman-profile-avatar-icon-with-brown-hair-and-a-red-shirt-with-a-white-background-free-vector.jpg',
    'https://cdn.vectorstock.com/i/1000v/41/11/business-woman-profile-icon-vector-4334111.avif',
    'https://cdn-icons-png.flaticon.com/512/3981/3981401.png',
    'https://img.freepik.com/premium-vector/female-face-icon-flat-vector-design-woman-girl-profile-design-template-identity-concept_581136-214.jpg?w=1480',
  ]

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
    const checkedData = tempData.find((e) => (e.email === email && e.password === password));
    // If both are correct login
    if (checkedData) {
      alert("login Success");
      setUser(checkedData);
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
      {isLoggedIn ?  <Profile />:
        isNewUser ? <SignupForm handleSignup={handleSignup} toggleLogin={setIsNewUser} /> : <LoginForm handleLogin={handleLogin} toggleLogin={setIsNewUser} />
      }
    </div>
  )
}

export default Account