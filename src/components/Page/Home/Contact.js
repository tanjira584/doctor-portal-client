import React from "react";
import bg from "../../../assets/images/appointment.png";

const Contact = () => {
    return (
        <div
            className="py-5"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container-md">
                <div className="section-info mb-5 text-center text-light">
                    <h5>Contact Us</h5>
                    <h2>Stay Connected With Us</h2>
                </div>
                <div className="w-50 mx-auto">
                    <form>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id=""
                                placeholder="Email address"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id=""
                                placeholder="Subject"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                name=""
                                className="form-control"
                                id=""
                                cols="30"
                                placeholder="Your Message"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
