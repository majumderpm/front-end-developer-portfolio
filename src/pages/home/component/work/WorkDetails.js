import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';


const WorkDetails = ({work}) => {
    return (
        <>
                {/* <div className='work_secBox'> */}
                  <div className="work_box">
                    <div className='work_content'>
                      <div className='work_logo'>
                        <div className='W_logoimg'>Demo</div>
                        <Link to='' className='arrow'><FaLocationArrow />{work.url}</Link>
                      </div>
                      <div className='work_img'>
                        <img
                          src={work.img} alt="" />
                      </div>
                    </div>
                  </div>
                {/* </div> */}
                
        </>
    );
};

export default WorkDetails;