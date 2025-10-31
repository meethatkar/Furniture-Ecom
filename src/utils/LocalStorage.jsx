import React from 'react'

export const getData = ()=>{
  const tempData = JSON.parse(localStorage.getItem("userData"));
  if(tempData){
    return tempData;
  }
  else{
    return [];
  }
}

export const setData = (userDataObj)=>{
  localStorage.setItem("userData",JSON.stringify(userDataObj));
}

export const getUserLogin =()=>{
  const tempData = sessionStorage.getItem("IsLoggedIn");
  if(tempData){
    return JSON.parse(sessionStorage.getItem("LoggedInUserData"));
  }
  else{
    return false;
  }
}

export const setUserLogin =(value, currentUserData)=>{
  sessionStorage.setItem("IsLoggedIn", value);
  sessionStorage.setItem("LoggedInUserData",JSON.stringify(currentUserData));
}