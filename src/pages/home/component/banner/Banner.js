import React from 'react';
import './banner.css';
import Typewriter from "typewriter-effect";
import logo from '../../../../assets/images/header/logo2.png';

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className="page-header header-filter">
          <div className="squares square1"></div>
          <div className="squares square2"></div>
          <div className="squares square3"></div>
          <div className="squares square4"></div>
          <div className="squares square5"></div>
          <div className="squares square6"></div>
          {/* <div className="squares square7"></div> */}
          <div className="container">
          <div className="banner_info"></div>
            <div className="content_center brand">
            <img src={logo} alt='' className='b_logo' />
              <h1 className="h1_seo">
                <Typewriter

                  onInit={(typewriter) => {

                    typewriter

                      .typeString("Web Designer")
                      // .typeString("Html Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("UI Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Html Developer")
                      // .pauseFor(1000)
                      // .deleteAll()
                      .start();

                  }}
                />
              </h1>
              <h2 className='sub_heading'>Visit my portfolio and keep your feedback</h2>
            </div>
          </div>
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default Banner