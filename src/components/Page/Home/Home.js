import React from "react";

import Footer from "../../share/Footer";
import Header from "../../share/Header";
import Appoinment from "./Appoinment";
import Banner from "./Banner";
import Contact from "./Contact";
import DentalCare from "./DentalCare";
import Information from "./Information";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appoinment></Appoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
