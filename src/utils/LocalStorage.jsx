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
  const tempData = localStorage.getItem("IsLoggedIn");
  if(tempData){
    return tempData;
  }
  else{
    return false;
  }
}

export const setUserLogin =(value)=>{
  localStorage.setItem("IsLoggedIn", value);
}