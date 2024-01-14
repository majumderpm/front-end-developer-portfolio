import React from 'react';

const Skills = ({ skill }) => {
    console.log(skill);
    const { id, describe, title, img } = skill;

    return (
        <>
   
              <div className='pr-page-intro__sorting-item checked rendered'>
                    <div className="pr-page-intro__sorting-title">
                    <img src={img} alt='' className='sk_img'/>
                    {/* <h3 className='heda2'>{title}%</h3> */}
                    <p className='sk_des'>{describe}</p>
                    </div>
                    <div className="pr-page-intro__sorting-before"></div>
                    <div className="pr-page-intro__sorting-count font__weight-semibold">{title}%</div>
                </div>
        </>
    );
};

export default Skills;