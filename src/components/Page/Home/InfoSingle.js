import React from "react";

const InfoSingle = ({ info }) => {
    return (
        <div
            style={{ backgroundColor: info.color, minHeight: "135px" }}
            className="p-4 d-flex align-items-center rounded"
        >
            <div className="info-img">
                <img src={info.img} alt="" />
            </div>
            <div className="info-content ms-3 text-light">
                <h6>{info.title}</h6>
                <p className="m-0">{info.text}</p>
            </div>
        </div>
    );
};

export default InfoSingle;
