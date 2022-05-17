import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AvailAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    const [user] = useAuthState(auth);
    const formattedDate = format(date, "PP");
    const [refatch, setRefatch] = useState(false);

    // useEffect(() => {
    //     fetch("http://localhost:5000/services")
    //         .then((res) => res.json())
    //         .then((data) => setServices(data));
    // }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setRefatch(false);
            });
    }, [formattedDate, refatch]);

    // const { isLoading, data } = useQuery("available", () => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
    //         (res) => res.json()
    //     );
    // });

    // if (isLoading) {
    //     return <p className="text-center">Loading...</p>;
    // }
    // console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();

        const slot = e.target.slot.value;

        const booking = {
            treatmentId: service._id,
            treatment: service.name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value,
        };
        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`);
                    e.target.reset();
                    setRefatch(true);
                } else {
                    toast.error(
                        `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
                    );
                }
            });
    };

    return (
        <div className="py-5">
            <div className="container-md">
                <h4 className="text-center mb-4">
                    Available Appoinment on {format(date, "PP")}
                </h4>
                <div className="row g-4">
                    {services?.map((service) => (
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
                                        value={user?.displayName || ""}
                                        id=""
                                        placeholder="Full name"
                                        readOnly
                                    />
                                    <input
                                        type="email"
                                        className="form-control mb-3"
                                        name="email"
                                        id=""
                                        value={user?.email || ""}
                                        placeholder="Enter email"
                                        readOnly
                                    />
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        name="phone"
                                        id=""
                                        placeholder="Phone Number"
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
