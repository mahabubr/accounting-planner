import React from 'react';
import ContactMe from './ContactMe/ContactMe';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeServices from './HomeServices/HomeServices';
import TrustedBy from './TrustedBy/TrustedBy';
import { Helmet } from "react-helmet";

const HomeLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Accounting Planners</title>
            </Helmet>
            <HomeHeader></HomeHeader>
            <HomeServices></HomeServices>
            <HomeAbout></HomeAbout>
            <TrustedBy></TrustedBy>
            <ContactMe></ContactMe>
        </div>
    );
};

export default HomeLayout;