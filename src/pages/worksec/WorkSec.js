import React, { useEffect } from 'react';
import path1 from '../../assets/images/shape/path1.png';
import work1 from '../../assets/images/work/work-1.png';
import work2 from '../../assets/images/work/work-2.png';
import work3 from '../../assets/images/work/work-3.png';
import work4 from '../../assets/images/work/work-4.png';
import work5 from '../../assets/images/work/work-5.png';
import work6 from '../../assets/images/work/work-6.png';
import work7 from '../../assets/images/work/work-7.png';
import work8 from '../../assets/images/work/work-8.png';
import work11 from '../../assets/images/work/work-11.jpeg';
import work10 from '../../assets/images/work/work-10.png';
import { FaLocationArrow } from 'react-icons/fa';
import './workSec.css';
import { Link } from 'react-router-dom';

const WorkSec = () => {

    useEffect(() => {
        document.title = " Portfolio | Work"
     }, []);

    return (
        <>


            <section className='inner'>
                <div className="page-header header-filter">
                    <div className="squares square4"></div>
                    <div className="squares square6"></div>
                    <div className="container">
                        <div className="inner_info"></div>
                        <div className="content_center brand">
                            <h2 className='innersub_heading'>My Work</h2>
                            <h1 className="h1_seo">Explore My Work</h1>
                        </div>
                    </div>
                </div>
            </section>


            <div className="section section-basic" id="basic-elements">
                <img src={path1} className="path" alt='' />
                <div className="container">

                    <div className='row g-5'>
                        <div className='col-lg-4 col-md-6 col-sm-12 '>
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
                        <div className='col-lg-4 col-md-6 col-sm-12 '>
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
                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className="work_box">
                                <div className='work_content'>
                                    <div className='work_logo'>
                                        <div className='W_logoimg'>Chemical Security</div>
                                        <Link to='https://admin.chemicalsecurity.com/admin/users' target='_blank' className='arrow'><FaLocationArrow /></Link>
                                    </div>
                                    <div className='work_img'>
                                        <img
                                            src={work11} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 '>
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
                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className="work_box">
                                <div className='work_content'>
                                    <div className='work_logo'>
                                        <div className='W_logoimg'>Form Design</div>
                                        <Link to='https://timely-ganache-acf5a0.netlify.app/' target='_blank' className='arrow'><FaLocationArrow /></Link>
                                    </div>
                                    <div className='work_img'>
                                        <img
                                            src={work7} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className="work_box">
                                <div className='work_content'>
                                    <div className='work_logo'>
                                        <div className='W_logoimg'>Email Template</div>
                                        <Link to='https://timely-tiramisu-cc744d.netlify.app/' target='_blank' className='arrow'><FaLocationArrow /></Link>
                                    </div>
                                    <div className='work_img'>
                                        <img
                                            src={work2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>
            </div >
        </>
    );
};

export default WorkSec;