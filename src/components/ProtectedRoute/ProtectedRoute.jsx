import React, { useContext } from 'react'
import { userInfoContext } from '../../context/userInfo'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
   const{userToken}=useContext(userInfoContext);
   if(userToken===null){return <Navigate to={'/login'}/>}
   return <>{children}</>;
   
  
}
