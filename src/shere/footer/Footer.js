import React from 'react';
import './Footer.css';
import flogo from '../../assets/images/header/logo2.png';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='footer_sec'>
        <div className='container'>
          <div className='f_content'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='f_logo'>
                  <Link to='/' ><img src={flogo} alt='' /></Link>
                </div>
                <div className='f_info'>
                  <ul>
                    <li><Link to='https://www.linkedin.com/in/pratima-majumder-9402a8199' target='_blank'><FaLinkedinIn /></Link></li>
                    {/* <li><Link to=''><FaFacebookF /></Link></li> */}
                  </ul>
                  <p>© All rights reserved 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;