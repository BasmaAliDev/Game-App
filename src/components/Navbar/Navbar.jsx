import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import imgLogo from '../../image/logo.png';
import { userInfoContext } from '../../context/userInfo';

export default function Navbar() {
  let navigate = useNavigate();
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const { userToken, allUsers } = useContext(userInfoContext);
  function logout() {
      localStorage.removeItem('userToken');
      setTimeout(() => {
        navigate('/login')
      }, 1000);
    
  }


  const handleToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const closeNavbar = () => {
    setIsNavbarCollapsed(true);
  };
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg p-0  fixed-top px-md-5 bg-main shadow  py-3 ">
        <div className='container'>
        <NavLink className="navbar-brand" to="/home">
          <img src={imgLogo} alt="image logo" style={{ width: '50px' }} />
          GameOver</NavLink>
          <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className={`fa-solid ${isNavbarCollapsed ? 'fa-bars' : 'fa-xmark'}`}></i>
        </button>


        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto" onClick={closeNavbar}>
              {userToken ?
                <>
                  <li className="nav-item active">
                    <NavLink className="nav-link " to="/home">Home</NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="/Platforms/pc"
                    >
                      Platforms
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink className="dropdown-item" to="/Platforms/browser">browser</NavLink>
                      <NavLink className="dropdown-item" to="/Platforms/pc">pc</NavLink>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="/Sort/popularity"
                    >
                      Sort By
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink className="dropdown-item" to="/Sort/popularity">Popularity</NavLink>
                      <NavLink className="dropdown-item" to="/Sort/release-date">Release Date</NavLink>
                      <NavLink className="dropdown-item" to="/Sort/alphabetical">Alphabetical</NavLink>
                      <NavLink className="dropdown-item" to="/Sort/relevance">Relevance</NavLink>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="/categories/mmorpg"
                    >
                      Categories
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <NavLink className="dropdown-item" to="/categories/mmorpg">mmorpg</NavLink>
                      <NavLink className="dropdown-item" to="/categories/shooter">shooter</NavLink>
                      <NavLink className="dropdown-item" to="/categories/sailing">sailing</NavLink>
                      <NavLink className="dropdown-item" to="/categories/permadeath">permadeath</NavLink>
                      <NavLink className="dropdown-item" to="/categories/superhero">superhero</NavLink>
                      <NavLink className="dropdown-item" to="/categories/pixel">pixel</NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" onClick={logout}  >Log out</NavLink>
                  </li>
                </> :
                <>
                  <li className="nav-item active">
                    <NavLink className="nav-link " to="/register">SignUp</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                </>
              }
            </ul>
          </div>

        </div>

      </nav>
    </>
  );
}
