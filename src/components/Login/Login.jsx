import React, {  useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import gaming from '../../image/gaming.jpg'
import { userInfoContext } from '../../context/userInfo';

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const {setUserToken}=useContext(userInfoContext);
  let navigate=useNavigate();
let user = {
  email: "",
  password: "",
}
  // Initialize allUsers array by loading from localStorage if available
  let allUsers = JSON.parse(localStorage.getItem('users')) || [];


  function userLogin(user) {
    //========================= Check if the user already exists
    const existingUser = allUsers.find(u => u.email === user.email && u.password===user.password);
    if (existingUser) {
      setUserToken(user.email)
      localStorage.setItem('userToken',user.email);
      setSuccessMessage("Email already exists");
      setTimeout(() => {
        navigate('/home')
       }, 1000);
     
    }else{
      setErrorMessage("wrong email or password");
    }

    //======================= Add the user to the allUsers array
    
    
  
  }


const formikObj = useFormik({
  initialValues: user,
  onSubmit: userLogin,
  validate: function (values) {
    setErrorMessage(null);
    const errors = {}
    if (values.password.length < 6 || values.password.length > 12) { errors.password = "Password must be from 6 characters and 12 characters " }
    if (values.email.includes("@") === false || values.email.includes('.') === false) { errors.email = "Email Invalid ." }
  
    console.log(errors);
    return errors;

  }




})


return <>

  <div className="container  vh-100 ">
    <div className="row align-items-center h-100  ">
      <div className="row bg-main shadow px-0">
        <div className='col-md-6 px-0 '>
          <img src={gaming} className="w-100" alt="" />
        </div>
        <div className="regester col-md-6 m-auto  ">
          <h2 className='text-center fa-lg  py-2'>Login in to GameOver</h2>
          {successMessage ? <div className='alert alert-success'>{successMessage}</div> : ""}
          {errorMessage ? <div className='alert alert-danger'>{errorMessage}</div> : ""}
          <form onSubmit={formikObj.handleSubmit}>


            <input placeholder='Enter Your Email' onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.email} id='email' type="email" className='form-control mb-3 ' />
            {formikObj.errors.email && formikObj.touched.email ? <div className='alert alert-danger'>{formikObj.errors.email}</div> : ""}


            <input placeholder='Enter Your Password' onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.password} id='password' type="password" className='form-control mb-3 ' />
            {formikObj.errors.password && formikObj.touched.password ? <div className='alert alert-danger'>{formikObj.errors.password}</div> : ""}

            <button className='btn btn-main  shadow text-white w-100 mt-1' type='submit' disabled={!formikObj.isValid || !formikObj.dirty} >Login </button>

          </form>

          <p className='fa-xs pt-4 text-center'>Not a member yet?{"  "}
            <Link to={'/register'} className=' text-decoration-none' >Create Account</Link></p>
         
        </div>
      </div>
    </div>
  </div>
</>
}