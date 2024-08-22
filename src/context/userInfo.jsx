/*import { createContext, useState } from "react";
import React from 'react'
export let userInfoContext =createContext();


export default function UserInfoProvider({ children }) {
     const [userObject, setUserObject] = useState(null);
     let allUsers = JSON.parse(localStorage.getItem('users')) || [];


     function userLogin(user) {
       //========================= Check if the user already exists
       const existingUser = allUsers.find(u => u.email === user.email && u.password===user.password);
       if (existingUser) {
         setUserObject(user);
         setSuccessMessage("Email already exists");
         setTimeout(() => {
           navigate('/home')
          }, 1000);
        
       }else{
         setErrorMessage("wrong email or password");
       }
   
       //======================= Add the user to the allUsers array
       
       
     
     }
  
  return <userInfoContext.Provider value={{allUsers,userObject, setUserObject,userLogin}} >
{ children }
  </userInfoContext.Provider>
}
*/import { createContext, useState, useEffect } from "react";
import React from 'react';
export let userInfoContext = createContext();

export default function UserInfoProvider({ children }) {
  const [userToken, setUserToken] = useState(()=>{ 
    return localStorage.getItem('userToken');});
  const [allUsers, setAllUsers] = useState(() => {
   return JSON.parse(localStorage.getItem('users')) || [];
  });
  

 

  return (
    <userInfoContext.Provider value={{ allUsers, userToken, setUserToken,setAllUsers }}>
      {children}
    </userInfoContext.Provider>
  );
}
