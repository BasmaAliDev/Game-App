import { useFormik } from 'formik';
import React, {  useContext, useState } from 'react';
import {   Link, useNavigate } from 'react-router-dom';
import gaming from '../../image/gaming.jpg'

export default function Register() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    let navigate=useNavigate();
  let user = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: ""
  }
    // Initialize allUsers array by loading from localStorage if available
    let allUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    function setLocalStorage() {
      localStorage.setItem("users", JSON.stringify(allUsers));
    }
  
    function userRegister(user) {
      //========================= Check if the user already exists
      const existingUser = allUsers.find(u => u.email === user.email);
      if (existingUser) {
        setErrorMessage("Email already exists");
        return;
      }
  
      //======================= Add the user to the allUsers array
      allUsers.push(user);
      setLocalStorage();
      setSuccessMessage("Registration successful");
     setTimeout(() => {
      navigate('/login')
     }, 1000);
    }


  const formikObj = useFormik({
    initialValues: user,
    onSubmit: userRegister,
    validate: function (values) {
      setErrorMessage(null);
      const errors = {}
      if (values.name.length < 4 || values.name.length > 10) { errors.name = "Name must be from 4 characters and 10 characters " }
      if (values.password.length < 6 || values.password.length > 12) { errors.password = "Password must be from 6 characters and 12 characters " }
      if (values.rePassword !== values.password) { errors.rePassword = "Password and RePassword doesn't match" }
      if (values.email.includes("@") === false || values.email.includes('.') === false) { errors.email = "Email Invalid ." }
      if (!values.phone.match(/^(02)?01[0125][0-9]{8}$/)) { errors.phone = 'Phone Invalid.' }
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
            <h2 className='text-center fa-lg  py-2'>Create My Account!</h2>
            {successMessage ? <div className='alert alert-success'>{successMessage}</div> : ""}
            {errorMessage ? <div className='alert alert-danger'>{errorMessage}</div> : ""}
            <form onSubmit={formikObj.handleSubmit}>

              <input placeholder='Enter Your Name' onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.name} id='name' type="text" className='form-control mb-3   ' />
              {formikObj.errors.name && formikObj.touched.name ? <div className='alert alert-danger'>{formikObj.errors.name}</div> : ""}


              <input placeholder='Enter Your Email' onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.email} id='email' type="email" className='form-control mb-3 ' />
              {formikObj.errors.email && formikObj.touched.email ? <div className='alert alert-danger'>{formikObj.errors.email}</div> : ""}


              <input placeholder='Enter Your Password' onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.password} id='password' type="password" className='form-control mb-3 ' />
              {formikObj.errors.password && formikObj.touched.password ? <div className='alert alert-danger'>{formikObj.errors.password}</div> : ""}


              <input placeholder='Enter RePassword' onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.rePassword} id='rePassword' type="password" className='form-control mb-3 ' />
              {formikObj.errors.rePassword && formikObj.touched.rePassword ? <div className='alert alert-danger'>{formikObj.errors.rePassword}</div> : ""}


              <input placeholder='Enter Your Phone' onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.phone} id='phone' type="tel" className='form-control mb-3 ' />
              {formikObj.errors.phone && formikObj.touched.phone ? <div className='alert alert-danger'>{formikObj.errors.phone}</div> : ""}

              <button className='btn btn-main  shadow text-white w-100 mt-1' type='submit' disabled={!formikObj.isValid || !formikObj.dirty} >Create Account </button>

            </form>

            <p className='fa-xs pt-4 text-center'>Already a member?{" "}
              <Link to={'/login'} className=' text-decoration-none' >Log In</Link></p>
           
          </div>
        </div>
      </div>
    </div>
  </>
}//disabled={!formikObj.isValid || !formikObj.dirty}

//                {loading?<FallingLines color="#4fa94d"width="30"visible={true}ariaLabel="falling-circles-loading"/>:"Register"}