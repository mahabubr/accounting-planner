import React from 'react';
import ContactMe from './ContactMe/ContactMe';
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
            <ContactMe></ContactMe>
        </div>
    );
};

export default HomeLayout;