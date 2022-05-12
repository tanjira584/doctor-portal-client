import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        console.log(name, email, phone, date, slot);
        e.target.reset();
    };

    return (
        <div className="py-5">
            <div className="container-md">
                <h4 className="text-center mb-4">
                    Available Appoinment on {format(date, "PP")}
                </h4>
                <div className="row g-4">
                    {services.map((service) => (
                        <div className="col-md-4" key={service._id}>
                            <div className="service-box text-center rounded p-4 shadow">
                                <h5>{service.name}</h5>
                                <p className="mb-2">{service.slots[0]}</p>
                                <span
                                    style={{ fontSize: "13px" }}
                                    className="d-block mb-2"
                                >
                                    {service.slots.length} SPACES AVAILABLE
                                </span>
                                <button
                                    className="btn btn-success"
                                    disabled={service.slots.length === 0}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => setService(service)}
                                >
                                    BOOK APPOINMENT
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/*------------Modal---------------------*/}

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    {service.name}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        value={format(date, "PP")}
                                        disabled
                                        name="date"
                                    />
                                    <select
                                        name="slot"
                                        id=""
                                        className="form-control mb-3"
                                    >
                                        {service?.slots?.map((slot) => (
                                            <option key={slot} value={slot}>
                                                {slot}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        name="name"
                                        id=""
                                        placeholder="Full name"
                                    />
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        name="phone"
                                        id=""
                                        placeholder="Phone Number"
                                    />
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        name="email"
                                        id=""
                                        placeholder="Enter email"
                                    />
                                    <input
                                        className="form-control btn btn-primary"
                                        type="submit"
                                        value="SUBMIT"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailAppoinment;
