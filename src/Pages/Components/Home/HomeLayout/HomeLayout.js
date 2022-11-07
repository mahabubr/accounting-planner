import React from 'react';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeServices from './HomeServices/HomeServices';
import TrustedBy from './TrustedBy/TrustedBy';

const HomeLayout = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <HomeServices></HomeServices>
            <HomeAbout></HomeAbout>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default HomeLayout;