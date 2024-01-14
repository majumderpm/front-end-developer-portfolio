import React, { useState } from 'react';
import path1 from '../../../../assets/images/shape/path1.png';
import './work.css';
import { Link, NavLink } from 'react-router-dom';
import work1 from '../../../../assets/images/work/work-1.png';
import work3 from '../../../../assets/images/work/work-3.png';
import work8 from '../../../../assets/images/work/work-8.png';
import work10 from '../../../../assets/images/work/work-10.png';
import work11 from '../../../../assets/images/work/work-11.jpeg';
// import { DownloadIcon } from '../../../../svgimg/Svg';
import { HiOutlineArrowDownRight } from "react-icons/hi2";
import { FaLocationArrow } from 'react-icons/fa';

const Work = () => {


  

  // const [works, setWorks] = useState();


  return (
    <>
      <div className=" section-basic" id="basic-elements">
        <img src={path1} className="path" alt='' />
        <div className="container">
          <h2 className="title">Explore My Work</h2>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 pt-5 work_boxsec'>
              <div className="work_box">
                <div className='work_content'>
                  <div className='work_logo'>
                    <div className='W_logoimg'>Client Projects</div>
                    <Link to='https://beenvied.co.uk/' target='_blank' className='arrow'><FaLocationArrow /></Link>
                  </div>
                  <div className='work_img'>
                    <img
                      src={work1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 pt-5 work_boxsec'>
              <div className="work_box">
                <div className='work_content'>
                  <div className='work_logo'>
                    <div className='W_logoimg'>Client Projects</div>
                    <Link to='https://convexsol.sentientgeeks.us/' target='_blank' className='arrow'><FaLocationArrow /></Link>
                  </div>
                  <div className='work_img'>
                    <img
                      src={work8} alt="" />
                  </div>
                </div>
              </div>
            </div>
           
            <div className='col-lg-4 col-md-6 col-sm-12 pt-5 work_boxsec'>
              <div className="work_box">
                <div className='work_content'>
                  <div className='work_logo'>
                    <div className='W_logoimg'>Sports-Design</div>
                    <Link to='https://clinquant-florentine-fc9a87.netlify.app/' target='_blank' className='arrow'><FaLocationArrow /></Link>
                  </div>
                  <div className='work_img'>
                    <img
                      src={work10} alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <NavLink className=" main_btn" type="button" to="/work"> see all <HiOutlineArrowDownRight /></NavLink>
        </div>
      </div >
    </>
  );
};

export default Work;