import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appBg from "../../../assets/images/appointment.png";

const Appoinment = () => {
    return (
        <div
            className=""
            style={{
                backgroundImage: `url(${appBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container-md">
                <div className="d-flex align-items-center">
                    <div className="w-50">
                        <div className="img" style={{ marginTop: "-100px" }}>
                            <img
                                className="rounded"
                                style={{ width: "100%" }}
                                src={doctor}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-50">
                        <div className="content text-light">
                            <h5>Appionment</h5>
                            <h2 className=" mb-3">Make An Appoinment Today</h2>
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

export default Appoinment;
