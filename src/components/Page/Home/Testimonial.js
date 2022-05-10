import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";
const Testimonial = () => {
    const testimonials = [
        {
            _id: 1,
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea ipsam voluptas voluptatum harum repellat aliquam explicabo, magnam molestiae consectetur sit facilis perferendis commodi. Sapiente excepturi non animi velit facere?",
            name: "Jhon Doe",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea ipsam voluptas voluptatum harum repellat aliquam explicabo, magnam molestiae consectetur sit facilis perferendis commodi. Sapiente excepturi non animi velit facere?",
            name: "William Son",
            location: "Silicon Valey",
            img: people2,
        },
        {
            _id: 3,
            desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea ipsam voluptas voluptatum harum repellat aliquam explicabo, magnam molestiae consectetur sit facilis perferendis commodi. Sapiente excepturi non animi velit facere?",
            name: "Joe Biden",
            location: "Chikago",
            img: people3,
        },
    ];
    return (
        <div className="py-5">
            <div className="container-md py-5">
                <div className="d-flex justify-content-between mb-5">
                    <div>
                        <h5>Testimonial</h5>
                        <h2>What Our Patients Say</h2>
                    </div>
                    <div>
                        <img style={{ height: "120px" }} src={quote} alt="" />
                    </div>
                </div>

                <div className="row">
                    {testimonials.map((testi) => (
                        <div className="col-md-4" key={testi._id}>
                            <Single testi={testi} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

const Single = ({ testi }) => {
    return (
        <div className="p-4 shadow rounded">
            <p className="mb-3">{testi.desc}</p>
            <div className="d-flex align-items-center">
                <div>
                    <img
                        className="border border-4 rounded-circle border-success"
                        src={testi.img}
                        alt=""
                    />
                </div>
                <div className="ms-3">
                    <h6>{testi.name}</h6>
                    <span>{testi.location}</span>
                </div>
            </div>
        </div>
    );
};
