import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga ab nostrum sapiente?",
            img: fluoride,
        },
        {
            _id: 2,
            title: "Cavity Filling",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga ab nostrum sapiente?",
            img: cavity,
        },
        {
            _id: 3,
            title: "Teath Whitenning",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga ab nostrum sapiente?",
            img: whitening,
        },
    ];
    return (
        <div className="py-5">
            <div className="section-info text-center mb-5">
                <h5 className="text-uppercase">Our Services</h5>
                <h2>Service We Provide</h2>
            </div>
            <div className="container-md">
                <div className="row g-4">
                    {services.map((service) => (
                        <div className="col-md-4 " key={service._id}>
                            <Service service={service}></Service>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
