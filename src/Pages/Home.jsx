import React from 'react';
import Banner from './Banner';

import Benefits from './Sections/Benefits';
import Products from './Sections/Products';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Benefits></Benefits>
            <Products></Products>
        </div>
    );
};

export default Home;