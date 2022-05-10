import React from "react";
import treatment from "../../../assets/images/treatment.png";

const DentalCare = () => {
    return (
        <div className="py-5">
            <div className="container-md">
                <div className="d-flex align-items-center">
                    <div className="w-50 p-5">
                        <div className="img p-4">
                            <img
                                className="rounded"
                                style={{ width: "100%" }}
                                src={treatment}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-50 p-5">
                        <div className="content p-4">
                            <h2 className="display-5 mb-3">
                                Exeptional Dental Care, on Your Terms.
                            </h2>
                            <p className="mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta sapiente officia quae.
                                Soluta laudantium incidunt libero inventore
                                dolorum aperiam voluptatem. Nisi aspernatur
                                sequi quas at dolores error, hic quos,
                                necessitatibus beatae cupiditate harum ad porro
                                consectetur esse. Laboriosam architecto deleniti
                                eos quae iust, amet labore nesciunt inventore
                                sint?
                            </p>
                            <button className="btn btn-success">
                                GET STARTED
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;
