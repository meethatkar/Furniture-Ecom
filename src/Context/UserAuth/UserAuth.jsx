import React, { createContext, useContext, useEffect, useState } from 'react'

export const authContext = createContext();

export const useAuth = ()=>{
  return useContext(authContext);
}

const UserAuthProvider = ({children}) => {

  const [user, setUser] = useState({
    name: String,
    email: String,
    password: String,
    phoneNum: String,
    address: String,
    gender: String,
    age: String
  });

  const value = {
    user,
    setUser
  }

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  )
}

export default UserAuthProvider