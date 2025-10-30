import React, { createContext, useContext, useState } from 'react'
import { getData } from '../../utils/LocalStorage';

export const authContext = createContext();

export const useAuth = ()=>{
  return useContext(authContext);
}

const userAuthProvider = ({children}) => {

  const [user, setUser] = useState({
    name: String,
    email: String,
    password: String,
    phoneNum: String,
    address: String,
    gender: String,
    age: String
  });
  
  const data = getData();
  

  return (
    <authContext.Provider>
      {children}
    </authContext.Provider>
  )
}

export default userAuthProvider