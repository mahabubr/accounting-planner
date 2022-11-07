import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeServices from './HomeServices/HomeServices';

const HomeLayout = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <HomeServices></HomeServices>
        </div>
    );
};

export default HomeLayout;