import React from 'react';
import icon1 from '../../../../assets/images/featureicon/ico1.png';
import icon2 from '../../../../assets/images/featureicon/ico2.png';
import icon3 from '../../../../assets/images/featureicon/ico3.png';
import icon4 from '../../../../assets/images/featureicon/ico4.png';
import icon5 from '../../../../assets/images/featureicon/ico5.png';
import icon6 from '../../../../assets/images/featureicon/ico6.png';
import './Features.css';
import AllFeatures from './AllFeatures';

const Features = () => {

    const featureData = [
        {
            id: 1,
            logo: icon1,
            heading: 'Bootstrap'
        },
        {
            id: 2,
            logo: icon2,
            heading: 'Google Fonts'
        },
        {
            id: 3,
            logo: icon3,
            heading: 'Responsive'
        },
        {
            id: 4,
            logo: icon4,
            heading: 'CSS Shapes'
        },
        {
            id: 5,
            logo: icon5,
            heading: 'Clean Code'
        },
        {
            id: 6,
            logo: icon6,
            heading: '6+ Color Variations'
        },

    ]

    return (
        <>
            <section className='features_sec'>
                <div className='container'>
                <h2 className="title text-center mb-5">100% Guaranteed Satisfaction.</h2>
                    <div className='row justify-content-center'>
                   {
                    featureData.map((item, i) =>(
                        <div className='col-lg-3 col-md-4 col-sm-6 g-4'>
                            <AllFeatures
                            key={item.id}
                            item={item}
                            ></AllFeatures>
                        </div>
                    )
                    )
                   }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;