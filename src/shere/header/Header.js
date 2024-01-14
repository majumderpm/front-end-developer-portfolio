import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/header/logo2.png';
import { HiOutlineDownload } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const Header = () => {


  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   // console.log(window.scrollY);
  //   if (window.scrollY >= 80){
  //     setNavbar(true);
  //   } else{
  //     setNavbar(false);
  //   }
  // }
  // window.addEventListener('scroll', changeBackground);

  const [showNavbar, setShowNavbar] = useState(false);
  // const [closeNavbar, setCloseNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  return (
    <>

      <nav className='navbar' id='mobileNav' >
        <div className='container'>
          {/* <div className='row'>
            <div className='col-md-3'> */}
              <Link className="navbar-brand" to="#" target="_blank">
                <img src={logo} alt='' />
              </Link>
              <div className='order'>
              <Link to='https://drive.google.com/file/d/13VF9wlXFr1j0--Ty9u_LUHuatB30gN5D/view?usp=drivesdk' target='_blank' className=" desk main_btn" type="button">
                <HiOutlineDownload /> download CV
              </Link>
              <Link to='' className=" mobile main_btn" type="button">
                <HiOutlineDownload />
              </Link>
            <div className='menubar'>
              <button onClick={handleShowNavbar}><IoMdMenu  className='text-3xl'/></button>
            </div>
              </div>
            <div className={`itmemenu navbar_menunav ${showNavbar && 'active'}`}>
              <ul class=" ms-auto">
              <button className='close' onClick={handleShowNavbar}><MdClose  className='text-3xl'/></button>
               {/* <i className='close'>< /></i> */}
                <li className="nav-item">
                  <NavLink className="nav-Link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-Link" to="/work">Work</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-Link" to="/about">About</NavLink>
                </li> */}
              </ul>

            </div>
          
             
            {/* </div> */}
          {/* </div> */}
        </div>
      </nav>



    </>
  );
};

export default Header;