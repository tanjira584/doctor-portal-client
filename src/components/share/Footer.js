import React from "react";
import fbg from "../../assets/images/footer.png";

const Footer = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${fbg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <footer className="footer-top py-5">
                <div className="container-md">
                    <div className="d-flex justify-content-between">
                        <div className="footer-service">
                            <h4>Services</h4>
                            <ul>
                                <li>
                                    <a href=" ">Emergenci Checkup</a>
                                </li>
                                <li>
                                    <a href=" ">Monthly Checkup</a>
                                </li>
                                <li>
                                    <a href=" ">Weekly Checkup</a>
                                </li>
                                <li>
                                    <a href=" ">Deep Checkup</a>
                                </li>
                            </ul>
                        </div>
                        <div className="oral-health">
                            <h4>Oral Health</h4>
                            <ul>
                                <li>
                                    <a href=" ">Fluoride Treatment</a>
                                </li>
                                <li>
                                    <a href=" ">Cavity Fillings</a>
                                </li>
                                <li>
                                    <a href=" ">Teath Whitening</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-address">
                            <h4>Our Address</h4>
                            <p className="m-0">New York - 10101 Hudason.</p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer-bottom py-5">
                <p className="m-0 py-3 text-center">
                    Copyrights 2022. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
