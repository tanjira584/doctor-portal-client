import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoSingle from "./InfoSingle";

const Information = () => {
    const information = [
        {
            _id: 1,
            img: clock,
            title: "Opening Time",
            text: "8:30 pm - 9:00 pm",
            color: "#19D3AE",
        },
        {
            _id: 2,
            img: marker,
            title: "Visit Our Location",
            text: "Brooklyn, 2023 Nc, United State",
            color: "#3A4256",
        },
        {
            _id: 3,
            img: phone,
            title: "Contact us Now",
            text: "+8801613071257",
            color: "#19D3AE",
        },
    ];
    return (
        <section className="py-5">
            <div className="container-md ">
                <div className="row g-3">
                    {information.map((info) => (
                        <div className="col-md-4" key={info._id}>
                            {" "}
                            <InfoSingle info={info}></InfoSingle>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Information;
