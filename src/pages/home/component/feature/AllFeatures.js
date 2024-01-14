import React from 'react';

const AllFeatures = ({ item }) => {

    const { logo, heading } = item;

    return (
        <>
            <div className='icon_card'>
                <img src={logo} alt='' />
                <h4 className='head3'>{heading}</h4>
            </div>

           

        </>
    );
};

export default AllFeatures;