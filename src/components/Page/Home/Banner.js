import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
    return (
        <section className="py-5">
            <div className="container-md">
                <div className="d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="banner-content me-4">
                            <h2 className="display-2 mb-3">
                                Your New Smile Start Here
                            </h2>
                            <p className="mb-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quia rem maxime magnam a eum
                                vero ad mollitia? Earum, molestiae maxime.
                            </p>
                            <button className="btn btn-success">
                                GET STARTED
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-img ms-4">
                            <img src={chair} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
