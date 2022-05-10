import React from "react";

const Service = ({ service }) => {
    return (
        <div className="text-center shadow p-4 rounded">
            <div className="img px-4 mb-3">
                <img src={service.img} alt="" />
            </div>
            <h5 className="mb-3">{service.title}</h5>
            <p className="m-0">{service.desc}</p>
        </div>
    );
};

export default Service;
